const buildHistory = (currentAction, check) => {
  let history;
  
  if (check) {
    history =  JSON.stringify(currentAction);
    history =  JSON.parse(history);
  } else {
    history =  JSON.stringify(currentAction.slice(0, currentAction.length - 1));
    history =  JSON.parse(history);
  }
  
  if (history.length > 2) {
    history = history.slice(history.length - 3);
  }

  return history;
}

export default buildHistory;