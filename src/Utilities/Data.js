export const Critiria = [{ value: 'Tag', label: 'Tag' },
{ value: 'Priority', label: 'Priority' },
{ value: 'Due', label: 'Due' },
{ value: 'Assignee', label: 'Assignee' }];

export const Priority = [{ value: "1", label: "High" },
{ value: "2", label: "Medium" },
{ value: "3", label: "Low" },
{ value: 'All', label: "All" }];

export const styles = {

    control: (style) => ({ ...style, width: "100%", color: "blue" }),
    option: (style) => ({ ...style, color: "red" })

}
export const Todo_URL = "http://localhost:3500/items";
export const User_URL = "http://localhost:3500/users"
export const initialFormValue = {
    Fname:'',
    Email:'',
    Password:'',
    ConPassword:''

 }

export const userStyles = {
    control: (style) => ({ ...style, width: "100%", color: "red" }),
    option: (style) => ({ ...style, color: "red", BackGroundColor: "black", width: "100%" })
}

export const filter = {

    priority: ['1', '2', '3', '0'],
    tags: 'all',
    due: 'all',
    option: "all",
    filter: false,
    result: true,
    assignee: 'all',
    search: 'all'
}

export const CATEGORY = {

    DELETE: 'delete',
    ACTIVE: 'active',
    FINISH: 'finish',
    DRAG: 'drag'
}

export const FILTER = {

    PRIORITY: 'Priority',
    TAG: 'Tag',
    ASSIGNEE: 'Assignee',
    DUEDATE: 'Due',
    SEARCH: 'search',
    NONE: 'all',
    RESET :'Reset',
    SET : 'set',
    ON  :'On',
    OFF :'Off',
    SUBSELECT :'subsel'
}

export const ACTION = {

    ADD: 'add',
    TRASH: 'trash',
    SETPRIO: 'prio',
    SETDATE: 'date',
    EDIT: 'edit',
    SETEDIT: 'editMode',
    SETTAG: 'tagsAdd',
    DRAG: 'drag',
    SETASSIGNEE: 'userAdd',
    LOAD: 'load',
    ADDASSIGNEE:'add',
    ADDTAG:'add',
    ADDTODO:'add'
}