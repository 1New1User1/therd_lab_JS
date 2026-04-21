function helloFromLogic() {
  console.log("logic works");
}

// NEW обращения
function getNewRequests(data) {
  return data.filter(item => item.status === "new");
}

// поиск по ID
function findRequestById(data, id) {
  return data.find(item => item.id === id);
}

// сортировка по приоритету
function sortByPriority(data) {
  return [...data].sort((a, b) => a.priority - b.priority);
}

// статистика
function buildStats(data) {
  return data.reduce((acc, item) => {
    acc.total++;
    acc.sumPriority += item.priority;

    if (item.priority > acc.maxPriority) {
      acc.maxPriority = item.priority;
    }

    if (item.status === "new") {
      acc.newCount++;
    }

    return acc;
  }, {
    total: 0,
    sumPriority: 0,
    maxPriority: 0,
    newCount: 0
  });
}