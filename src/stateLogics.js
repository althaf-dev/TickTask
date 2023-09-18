import { ACTION, CATEGORY, FILTER, Todo_URL, filter } from "./Utilities/Data";
import { patch, post } from "./apiRequest";

export function reducerTodo(state, action) {
  switch (action.type) {
    case ACTION.ADDTODO: return { todo: action.payload }
    default: return state
  }
}

const handlePriority = (state, payload) => {
  return state.filter(el => {
    if (el.id === payload.id) {
      el.priority = payload.val;
      patch(el, el.id);
    }
    return el;
  })
}

const handleDate = (state, payload) => {
  return state.filter(el => {
    if (el.id === payload.id) {
      el.DueDate = new Date(payload.val).toDateString().slice(4,);
      patch(el, el.id);
    }
    return el;
  })
}
const handleEdit = (state, payload) => {
  return state.filter(el => {
    if (el.id === payload.id) {
      el.item = payload.val;
      el.edit = false;
      patch(el, el.id);
    }
    return el;
  })
}

const handleEditMode = (state, currentId) => {
  return state.filter(el => {
    if (el.id === currentId) el.edit = true;
    return el;
  })
}

const handleAddTags = (state, payload) => {
  let tg = payload.val;
  return (state.map(el => {
    if (payload.id === el.id) {
      el.tags = tg;
      patch(el, el.id);
    }
    return el;
  }))
}

const handleAddAssignee = (state, payload) => {
  let user = payload.val;
  return (state.map(el => {
    if (payload.id === el.id) {
      el.user = user;
      patch(el, el.id);
    }
    return el;
  }))
}
const handleFinTasks = (state, payload) => {

  payload.ev.preventDefault();
  var data = payload.ev.dataTransfer.getData("text");
  return (state.filter(el => {
    if (el.id === Number(data) && payload.categoryBox === CATEGORY.FINISH) {
      el.status = true;
      el.deleted = false;
      patch(el, el.id);
    } else if (el.id === Number(data) && payload.categoryBox === CATEGORY.DELETE) {
      el.status = false;
      el.deleted = true;
      patch(el, el.id);
    } else if (el.id === Number(data) && payload.categoryBox === CATEGORY.ACTIVE) {
      el.status = false;
      el.deleted = false;
      patch(el, el.id);
    }
    return el;
  }))
}

const handleTrash = (state, currentId) => {
  return state.filter(el => {
    if (el.id === currentId) {
      el.deleted = true;
      patch(el, el.id);
    }
    return el;
  })
}

const handleTags = (state, tags) => Array.from(new Set([...state, ...tags]));

const handleAddTodo = (state, payload) => {
  console.log(payload.Data);
  return [...state, payload.Data]
}

export function reducerTodos(state, action) {
  switch (action.type) {
    case ACTION.ADD: return handleAddTodo(state, action.payload);
    case ACTION.TRASH: return handleTrash(state, action.payload)
    case ACTION.SETPRIO: return handlePriority(state, action.payload)
    case ACTION.SETDATE: return handleDate(state, action.payload)
    case ACTION.EDIT: return handleEdit(state, action.payload)
    case ACTION.SETEDIT: return handleEditMode(state, action.payload)
    case ACTION.SETTAG: return handleAddTags(state, action.payload)
    case ACTION.DRAG: return handleFinTasks(state, action.payload)
    case ACTION.SETASSIGNEE: return handleAddAssignee(state, action.payload)
    case ACTION.LOAD: return action.payload
    default: return state
  }
}

export function reducerTags(state, action) {
  switch (action.type) {
    case ACTION.ADDTAG: return handleTags(state, action.payload);
    default: return state;
  }
}

const handleSetFilter = (state, value) => {
  switch (state.option) {
    case FILTER.PRIORITY: return { ...state, priority: [value] }
    case FILTER.TAG: return { ...state, tags: value }
    case FILTER.DUEDATE: return { ...state, due: value.toDateString }
    case FILTER.ASSIGNEE: return { ...state, assignee: value }
    case FILTER.SEARCH: return { ...state, search: value }
    default: return state;
  }
}

export function reducerFilter(state, action) {
  switch (action.type) {
    case FILTER.RESET: return filter;
    case FILTER.SUBSELECT: return { ...state, option: action.payload.value };
    case FILTER.SET: return handleSetFilter(state, action.payload.value);
    case FILTER.ON: return { ...state, filter: true };
    case FILTER.OFF: return { ...state, filter: false };
    default: return state
  }
}
const handleUser = (state, user) => Array.from(new Set([...state, user]));
export function reduceUser(state, action) {
  switch (action.type) {
    case ACTION.ADDASSIGNEE: return handleUser(state, action.payload);
    default: return state;
  }
}

const activeTasksCount = (state) => {

  // return (state.filter((tdo) =>
  //   (tdo.deleted === false && tdo.status === false))).length;
}

const finishTaskCount = (state) => {

  return (state.filter(tdo =>
    (tdo.status === true && tdo.deleted === false))).length;
}

const deleteTaskCount = (state) => {

  return (state.filter(tdo =>
    (tdo.deleted === true))).length;
}

export const count = (state, category) => {
  switch (category) {
    case CATEGORY.ACTIVE: return activeTasksCount(state);
    case CATEGORY.FINISH: return finishTaskCount(state);
    case CATEGORY.DELETE: return deleteTaskCount(state);
    default: return 0;
  }
}

const getActiveTask = (state) => {
  return (state.filter((tdo) =>
    (tdo.deleted === false && tdo.status === false)));
}
const getFinishTask = (state) => {
  return (state.filter(tdo =>
    (tdo.status === true && tdo.deleted === false)));
}
const getDeletedTask = (state) => {
  return (state.filter(tdo => (tdo.deleted === true)));
}

export const getTask = (state, category) => {
  switch (category) {
    case CATEGORY.ACTIVE: return getActiveTask(state);
    case CATEGORY.FINISH: return getFinishTask(state);
    case CATEGORY.DELETE: return getDeletedTask(state);
    default: return 0;
  }
}