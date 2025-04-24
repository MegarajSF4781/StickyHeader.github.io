ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Reorder, ej.treegrid.Freeze,
    ej.treegrid.ColumnChooser, ej.treegrid.ColumnMenu, ej.treegrid.RowDD, ej.treegrid.ContextMenu,
    ej.treegrid.Toolbar, ej.treegrid.Resize, ej.treegrid.Filter);
var virtualData = [];
var dataSource = function () {
    var parent = -1;
    var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    for (var i = 0; i < 50000; i++) {
        if (i % 5 === 0) {
            parent = i;
        }
        if (i % 5 !== 0) {
            var num = isNaN((virtualData.length % parent) - 1) ? 0 : (virtualData.length % parent) - 1;
            virtualData[num].Crew.push({
                'TaskID': i + 1,
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        } else {
            virtualData.push({
                'TaskID': i + 1,
                'Crew': [],
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        }
    }
};
dataSource();
var tree = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',

    // allowPaging: true,
    pageSettings: { pageSize: 10 },
    treeColumnIndex: 1,
    allowResizing: true,
    showColumnChooser: true,
    allowRowDragAndDrop: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    enableStickyHeader: true,
    toolbar: ['ColumnChooser', 'Add', 'Delete'],
    allowReordering: true,
    showColumnMenu: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Indent', 'Outdent'],

    frozenColumns: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right', isPrimaryKey: true },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },

    ]
});
tree.appendTo('#TreeGrid');
let select = new ej.buttons.Button();
select.appendTo('#sticky');
let a = 1;
document.getElementById('sticky').onclick = () => {

    tree.enableStickyHeader = tree.enableStickyHeader === true ? false : true;
    tree2.enableStickyHeader = tree2.enableStickyHeader === true ? false : true;
    tree3.enableStickyHeader = tree3.enableStickyHeader === true ? false : true;

}

var tree2 = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',

    allowPaging: true,
    pageSettings: { pageSize: 10 },
    treeColumnIndex: 1,
    allowResizing: true,
    showColumnChooser: true,
    allowRowDragAndDrop: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    enableStickyHeader: true,
    toolbar: ['ColumnChooser', 'Add', 'Delete'],
    allowReordering: true,
    showColumnMenu: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Indent', 'Outdent'],

    frozenColumns: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right', isPrimaryKey: true },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },

    ]
});
tree2.appendTo('#TreeGrid2');

var tree3 = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowPaging: true,
    pageSettings: { pageSize: 20 },
    treeColumnIndex: 1,
    allowResizing: true,
    showColumnChooser: true,
    allowRowDragAndDrop: true,
    allowFiltering: true,
    filterSettings: { type: 'Menu' },
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    enableStickyHeader: true,
    toolbar: ['ColumnChooser', 'Add', 'Delete'],
    allowReordering: true,
    showColumnMenu: true,
    contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Indent', 'Outdent'],

    frozenColumns: 1,
    columns: [
        { field: 'taskID', headerText: 'Task ID', width: 70, textAlign: 'Right', isPrimaryKey: true },
        { field: 'taskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'endDate', headerText: 'End Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' },

    ]
});

tree3.appendTo('#TreeGrid3');
