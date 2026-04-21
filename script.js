helloFromLogic();

const list = document.getElementById("list");

// рендер списка
function renderList(data) {
  list.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
  div.className = "request";

    div.innerHTML = `
      <b>${item.title}</b> | 
      Студент: ${item.student} | 
      Приоритет: ${item.priority} | 
      Статус: ${item.status}
      <button class="delete">Удалить</button>
      <hr>
    `;

    // кнопка удаления
    div.querySelector(".delete").onclick = () => {
      div.remove();
    };

    list.appendChild(div);
  });
}

// кнопки
document.getElementById("btnAll").onclick = () => {
  renderList(studentRequests);
};

document.getElementById("btnNew").onclick = () => {
  const data = getNewRequests(studentRequests);
  renderList(data);
};

document.getElementById("btnSort").onclick = () => {
  const data = sortByPriority(studentRequests);
  renderList(data);
};

document.getElementById("btnStats").onclick = () => {
  const stats = buildStats(studentRequests);

  list.innerHTML = `
    Всего: ${stats.total}<br>
    Сумма приоритетов: ${stats.sumPriority}<br>
    Максимальный приоритет: ${stats.maxPriority}<br>
    Новых: ${stats.newCount}
  `;
};

/*
Блок A - функции
Задачи A1, A2
Создать  функцию calcTotal(a,b) (A1)
Создать функцию formatRecord(id, title, status) (A2)
*/
const calcTotal = (a,b) => {
  return a+ b
}
console.log(`Результат функции calcTotal: ${calcTotal(2,3)}`)

const formatRecord = (id, title, status) => {
  return `#${id} ${title} [${status}]`
}
console.log(`Результат выполнить функции FormatRecord ${formatRecord(Number(1), ("Тут какая-то информация"), ("new"))}`)

values = [1200, 500, 800, 1500];
let sumValues = 0;
for(let counter of values){
  sumValues += counter
}

console.log(`Сумма чисел массива values: ${sumValues}`)


let filterValues = [...values]
console.log(`Отфильтрованные значения в массиве Values ${filterValues.filter(num => num >= 800)}`)

let record = {
  id: 1,
  title: "Какой-то заголовок",
  value: 1234567890,
  status:"new",
  createdAt: "15.03.2026"
}

console.log(record)
record.status = 'old'
console.log(record)

recordNew = {...record}
recordNew.status = 'new'
function isNew(record){
  if(record.status === "new"){
    return true
  }
  else{
    return false
  }
}

console.log(`Результат первого объекта: ${isNew(record)}`)
console.log(`Результат первого объекта: ${isNew(recordNew)}`)


testItems = [
  {id:1, title:'Администратор', value:10},
  {id:2, title:'HR-менеджер', value:1000},
  {id:3, title:'Пользователь', value:100},
  {id:4, title:'Вакансия', value:10000},
];
const result = testItems.find(item => item.id === 1)
console.log(result || null)

const stats = testItems.reduce((numeOfEntries, sumValues) =>{
  numeOfEntries.count++
  numeOfEntries.totalValue += sumValues.value
  return numeOfEntries
}, {count:0, totalValue: 0})


const resultLogic = helloFromLogic()
console.log(`Вызов функции из файла Logic.js: ${resultLogic}`)


const domElement = document.getElementById('message1')
domElement.textContent = 'DOM работает'

const demoListDOM = document.getElementById('demoList')

for (let i = 0; i <=2; i++) {
    const textDemoListDOM = document.createElement('p')
    textDemoListDOM.textContent = 'Какой-то текст'
    demoListDOM.appendChild(textDemoListDOM)
}
