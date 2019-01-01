// import Vue from 'vue';
import { debounce } from '@ember/runloop';
import merge from './merge';
import { orderBy, getColumnById, getRowIdentity } from './table-util';
import $ from 'jquery';
import {computed, get, set} from "@ember/object";


import EmberObject from '@ember/object';


const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};
const toggleRowSelection = function(states, row, selected) {
  let changed = false;
  const selection = states.selection;
  const index = selection.indexOf(row);
  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row);
      changed = true;
    } else {
      selection.splice(index, 1);
      changed = true;
    }
  } else {
    if (selected && index === -1) {
      selection.push(row);
      changed = true;
    } else if (!selected && index > -1) {
      selection.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};
const toggleRowExpansion = function(states, row, expanded) {
  let changed = false;
  const expandRows = states.expandRows;
  if (typeof expanded !== 'undefined') {
    const index = expandRows.indexOf(row);
    if (expanded) {
      if (index === -1) {
        expandRows.push(row);
        changed = true;
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1);
        changed = true;
      }
    }
  } else {
    const index = expandRows.indexOf(row);
    if (index === -1) {
      expandRows.push(row);
      changed = true;
    } else {
      expandRows.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};



// export default TableStore;

// export default function tableStore() {
export default EmberObject.extend({




  table: null,
  initialState: null,

  init(){
    this._super();

    if(!get(this,'table')){
      throw new Error('Table is required.');
    }

    let initialState = get(this, 'initialState');


    let states = {
      rowKey: null,
      _columns: [],
      originColumns: [],
      columns: [],
      fixedColumns: [],
      rightFixedColumns: [],
      leafColumns: [],
      fixedLeafColumns: [],
      rightFixedLeafColumns: [],
      leafColumnsLength: 0,
      fixedLeafColumnsLength: 0,
      rightFixedLeafColumnsLength: 0,
      isComplex: false,
      filteredData: null,
      data: null,
      sortingColumn: null,
      sortProp: null,
      sortOrder: null,
      isAllSelected: false,
      selection: [],
      reserveSelection: false,
      selectable: null,
      currentRow: null,
      hoverRow: null,
      filters: {},
      expandRows: [],
      defaultExpandAll: false,
      selectOnIndeterminate: false
    };

    for (let prop in initialState) {
      if (initialState.hasOwnProperty(prop) && states.hasOwnProperty(prop)) {
        states[prop] = initialState[prop];
      }
    }

    set(this, 'states', states);




  },



  actions: {
    setData(states, data) {
      const dataInstanceChanged = states._data !== data;
      states._data = data;

      Object.keys(states.filters).forEach((columnId) => {
        const values = states.filters[columnId];
        if (!values || values.length === 0) return;
        const column = getColumnById(this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter((row) => {
            return values.some(value => column.filterMethod.call(null, value, row, column));
          });
        }
      });

      states.filteredData = data;
      states.data = sortData((data || []), states);

      this.updateCurrentRow();

      const rowKey = states.rowKey;

      if (!states.reserveSelection) {
        if (dataInstanceChanged) {
          this.clearSelection();
        } else {
          this.cleanSelection();
        }
        this.updateAllSelected();
      } else {
        if (rowKey) {
          const selection = states.selection;
          const selectedMap = getKeysMap(selection, rowKey);

          states.data.forEach((row) => {
            const rowId = getRowIdentity(row, rowKey);
            const rowInfo = selectedMap[rowId];
            if (rowInfo) {
              selection[rowInfo.index] = row;
            }
          });

          this.updateAllSelected();
        } else {
          console.warn('WARN: rowKey is required when reserve-selection is enabled.');
        }
      }

      const defaultExpandAll = states.defaultExpandAll;
      if (defaultExpandAll) {
        this.states.expandRows = (states.data || []).slice(0);
      } else if (rowKey) {
        // update expandRows to new rows according to rowKey
        const ids = getKeysMap(this.states.expandRows, rowKey);
        let expandRows = [];
        for (const row of states.data) {
          const rowId = getRowIdentity(row, rowKey);
          if (ids[rowId]) {
            expandRows.push(row);
          }
        }
        this.states.expandRows = expandRows;
      } else {
        // clear the old rows
        this.states.expandRows = [];
      }

      // Vue.nextTick(() => this.table.updateScrollY()); // todo: find solution
    },

    changeSortCondition(states, options) {
      states.data = sortData((states.filteredData || states._data || []), states);

      const { $el, highlightCurrentRow } = this.table;
      if ($el && highlightCurrentRow) {
        const data = states.data;
        const tr = $el.querySelector('tbody').children;
        // const rows = [].filter.call(tr, row => hasClass(row, 'el-table__row'));
        const rows = [].filter.call(tr, row => $(row).hasClass('el-table__row'));
        const row = rows[data.indexOf(states.currentRow)];

        // [].forEach.call(rows, row => removeClass(row, 'current-row'));
        [].forEach.call(rows, row => $(row).removeClass('current-row'));
        // addClass(row, 'current-row');
        $(row).addClass('current-row');
      }

      if (!options || !options.silent) {
        this.table.$emit('sort-change', {
          column: this.states.sortingColumn,
          prop: this.states.sortProp,
          order: this.states.sortOrder
        });
      }

      // Vue.nextTick(() => this.table.updateScrollY()); // todo: find solution
    },

    sort(states, options) {
      const { prop, order } = options;
      if (prop) {
        states.sortProp = prop;
        states.sortOrder = order || 'ascending';
        // Vue.nextTick(() => {  // todo: find solution
        //   for (let i = 0, length = states.columns.length; i < length; i++) {
        //     let column = states.columns[i];
        //     if (column.property === states.sortProp) {
        //       column.order = states.sortOrder;
        //       states.sortingColumn = column;
        //       break;
        //     }
        //   }
        //
        //   if (states.sortingColumn) {
        //     this.commit('changeSortCondition');
        //   }
        // });
      }
    },

    filterChange(states, options) {
      let { column, values, silent } = options;
      if (values && !Array.isArray(values)) {
        values = [values];
      }

      const prop = column.property;
      const filters = {};

      if (prop) {
        states.filters[column.id] = values;
        filters[column.columnKey || column.id] = values;
      }

      let data = states._data;

      Object.keys(states.filters).forEach((columnId) => {
        const values = states.filters[columnId];
        if (!values || values.length === 0) return;
        const column = getColumnById(this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter((row) => {
            return values.some(value => column.filterMethod.call(null, value, row, column));
          });
        }
      });

      states.filteredData = data;
      states.data = sortData(data, states);

      if (!silent) {
        // this.table.$emit('filter-change', filters);
        this.table.send('filterChange', filters);
      }

      // Vue.nextTick(() => this.table.updateScrollY()); // todo: find solution
    },

    insertColumn(states, column, index, parent) {
      let array = states._columns;
      if (parent) {
        array = parent.children;
        if (!array) array = parent.children = [];
      }

      if (typeof index !== 'undefined') {
        array.splice(index, 0, column);
      } else {
        array.push(column);
      }

      if (column.type === 'selection') {
        states.selectable = column.selectable;
        states.reserveSelection = column.reserveSelection;
      }

      if (this.table.$ready) {
        this.updateColumns(); // hack for dynamics insert column
        this.scheduleLayout();
      }
    },

    removeColumn(states, column, parent) {
      let array = states._columns;
      if (parent) {
        array = parent.children;
        if (!array) array = parent.children = [];
      }
      if (array) {
        array.splice(array.indexOf(column), 1);
      }

      if (this.table.$ready) {
        this.updateColumns(); // hack for dynamics remove column
        this.scheduleLayout();
      }
    },

    setHoverRow(states, row) {
      states.hoverRow = row;
    },

    setCurrentRow(states, row) {
      const oldCurrentRow = states.currentRow;
      states.currentRow = row;

      if (oldCurrentRow !== row) {
        this.table.$emit('current-change', row, oldCurrentRow);
      }
    },

    rowSelectedChanged(states, row) {
      const changed = toggleRowSelection(states, row);
      const selection = states.selection;

      if (changed) {
        const table = this.table;
        table.$emit('selection-change', selection ? selection.slice() : []);
        table.$emit('select', selection, row);
      }

      this.updateAllSelected();
    },
/*

    toggleAllSelection: debounce(10, function(states) {
      const data = states.data || [];
      if (data.length === 0) return;
      const selection = this.states.selection;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate
      const value = states.selectOnIndeterminate
        ? !states.isAllSelected
        : !(states.isAllSelected || selection.length);
      let selectionChanged = false;

      data.forEach((item, index) => {
        if (states.selectable) {
          if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
            selectionChanged = true;
          }
        } else {
          if (toggleRowSelection(states, item, value)) {
            selectionChanged = true;
          }
        }
      });

      const table = this.table;
      if (selectionChanged) {
        table.$emit('selection-change', selection ? selection.slice() : []);
      }
      table.$emit('select-all', selection);
      states.isAllSelected = value;
    })
*/


  },



  toggleAllSelection(states) {
    debounce(this, () => this.toggleAllSelectionDebounce(states), 10);
  },

  toggleAllSelectionDebounce(states){
    const data = states.data || [];
    if (data.length === 0) return;
    const selection = this.states.selection;
    // when only some rows are selected (but not all), select or deselect all of them
    // depending on the value of selectOnIndeterminate
    const value = states.selectOnIndeterminate
      ? !states.isAllSelected
      : !(states.isAllSelected || selection.length);
    let selectionChanged = false;

    data.forEach((item, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      }
    });

    const table = this.table;
    if (selectionChanged) {
      table.$emit('selection-change', selection ? selection.slice() : []);
    }
    table.$emit('select-all', selection);
    states.isAllSelected = value;
  },


  updateColumns() {
    const states = get(this, 'states');
    const _columns = states._columns || [];
    states.fixedColumns = _columns.filter((column) => column.fixed === true || column.fixed === 'left');
    states.rightFixedColumns = _columns.filter((column) => column.fixed === 'right');

    if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
      _columns[0].fixed = true;
      states.fixedColumns.unshift(_columns[0]);
    }

    const notFixedColumns = _columns.filter(column => !column.fixed);
    states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

    const leafColumns = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns = doFlattenColumns(states.fixedColumns);
    const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

    states.leafColumnsLength = leafColumns.length;
    states.fixedLeafColumnsLength = fixedLeafColumns.length;
    states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

    states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
    states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
  },

  isSelected(row) {
    return (get(this, 'states.selection') || []).indexOf(row) > -1;
  },

  clearSelection() {
    const states = get(this, 'states');
    states.isAllSelected = false;
    const oldSelection = states.selection;
    if (states.selection.length) {
      states.selection = [];
    }
    if (oldSelection.length > 0) {
      this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
      // todo : $emit
    }
  },

  setExpandRowKeys(rowKeys) {
    const expandRows = [];
    const data = get(this, 'states.data');
    const rowKey = get(this, 'states.rowKey');
    if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
    const keysMap = getKeysMap(data, rowKey);
    rowKeys.forEach((key) => {
      const info = keysMap[key];
      if (info) {
        expandRows.push(info.row);
      }
    });

    set(this, 'states.expandRows',  expandRows);
  },

  toggleRowSelection(row, selected) {
    const changed = toggleRowSelection(get(this, 'states'), row, selected);
    if (changed) {
      this.table.$emit('selection-change', get(this, 'states.selection') ? get(this, 'states.selection').slice() : []);
      // todo: above line $emit
    }
  },

  toggleRowExpansion(row, expanded) {
    const changed = toggleRowExpansion(get(this, 'states'), row, expanded);
    if (changed) {
      this.table.$emit('expand-change', row, get(this, 'states.expandRows')); // todo: sendAction?
      this.scheduleLayout();
    }
  },

  isRowExpanded(row) {
    const { expandRows = [], rowKey } = get(this,'states');
    if (rowKey) {
      const expandMap = getKeysMap(expandRows, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.indexOf(row) !== -1;
  },

  cleanSelection() {
    const selection = get(this,'states.selection')|| [];
    const data = get(this,'states.data');
    const rowKey = get(this,'states.rowKey');
    let deleted;
    if (rowKey) {
      deleted = [];
      const selectedMap = getKeysMap(selection, rowKey);
      const dataMap = getKeysMap(data, rowKey);
      for (let key in selectedMap) {
        if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.filter((item) => {
        return data.indexOf(item) === -1;
      });
    }

    deleted.forEach((deletedItem) => {
      selection.splice(selection.indexOf(deletedItem), 1);
    });

    if (deleted.length) {
      // this.table.$emit('selection-change', selection ? selection.slice() : []); // todo: sendAction?
    }
  },

  clearFilter() {

    // todo: this is bit comples;
    const states = get(this, 'states');
    const { tableHeader, fixedTableHeader, rightFixedTableHeader } = get(this, 'table').$refs; // todo: WTF is refs here?
    let panels = {};

    if (tableHeader) panels = merge(panels, tableHeader.filterPanels);
    if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels);
    if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels);

    const keys = Object.keys(panels);
    if (!keys.length) return;

    keys.forEach(key => {
      panels[key].filteredValue = [];
    });

    states.filters = {};

    this.commit('filterChange', {
      column: {},
      values: [],
      silent: true
    });
  },

  clearSort() {
    const states = this.states;
    if (!states.sortingColumn) return;
    states.sortingColumn.order = null;
    states.sortProp = null;
    states.sortOrder = null;

    // this.commit('changeSortCondition', { todo: this.sendAction ?
    //   silent: true
    // });
  },

  updateAllSelected() {
    const states = get(this, 'states');
    const { selection, rowKey, selectable, data } = states;
    if (!data || data.length === 0) {
      states.isAllSelected = false;
      return;
    }

    let selectedMap;
    if (rowKey) {
      selectedMap = getKeysMap(states.selection, rowKey);
    }

    const isSelected = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey)];
      } else {
        return selection.indexOf(row) !== -1;
      }
    };

    let isAllSelected = true;
    let selectedCount = 0;
    for (let i = 0, j = data.length; i < j; i++) {
      const item = data[i];
      const isRowSelectable = selectable && selectable.call(null, item, i);
      if (!isSelected(item)) {
        if (!selectable || isRowSelectable) {
          isAllSelected = false;
          break;
        }
      } else {
        selectedCount++;
      }
    }

    if (selectedCount === 0) isAllSelected = false;

    states.isAllSelected = isAllSelected;
  },

  scheduleLayout (updateColumns) {
    if (updateColumns) {
      this.updateColumns();
    }
    get(this, 'table').debouncedUpdateLayout(); // todo: man what a functions
  },

  setCurrentRowKey(key) {
    const states = get(this, 'states');
    const rowKey = states.rowKey;
    if (!rowKey) throw new Error('[Table] row-key should not be empty.');
    const data = states.data || [];
    const keysMap = getKeysMap(data, rowKey);
    const info = keysMap[key];
    states.currentRow = info ? info.row : null;
  },


  updateCurrentRow(){
    const states = get(this, 'states');
    const table = get(this, 'table');
    const data = states.data || [];
    const oldCurrentRow = states.currentRow;

    if (data.indexOf(oldCurrentRow) === -1) {
      if (states.rowKey && oldCurrentRow) {
        let newCurrentRow = null;
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item && item[states.rowKey] === oldCurrentRow[states.rowKey]) {
            newCurrentRow = item;
            break;
          }
        }
        if (newCurrentRow) {
          states.currentRow = newCurrentRow;
          return;
        }
      }
      states.currentRow = null;

      if (states.currentRow !== oldCurrentRow) {
        // table.$emit('current-change', null, oldCurrentRow); //todo : send current-change event
      }
    }



  },

  commit(name, ...args) {
    const mutations = this.mutations;
    if (mutations[name]) {
      mutations[name].apply(this, [this.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  },


});

