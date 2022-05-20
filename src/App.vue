<template>
  <div id="app">
    <div class="container">
      <div class="trackers"  @dragstart="testStart" @dragend="testEnd" @dragover="dragover">
        <div class="tracker">
          <div class="tracker__task tracker__task-title">Task 1</div>
          <div draggable="true" class="tracker__task">1</div>
          <div draggable="true" class="tracker__task">2</div>
          <div draggable="true" class="tracker__task">3</div>
        </div>
        <div class="tracker">
          <div draggable="true" class="tracker__task tracker__task-title">Task 2</div>
          <div draggable="true" class="tracker__task">1</div>
          <div draggable="true" class="tracker__task">2</div>
          <div draggable="true" class="tracker__task">3</div>
        </div>
        <div class="tracker">
          <div draggable="true" class="tracker__task tracker__task-title">Task 3</div>
          <div draggable="true" class="tracker__task">1</div>
          <div draggable="true" class="tracker__task">2</div>
          <div draggable="true" class="tracker__task">3</div>
        </div>
      </div>

      <!-- <div class="test-box" @dragstart="testStart" @dragend="testEnd" @dragover="dragover">
        <div class="test">
          <div draggable="true" class="test__item">1</div>
          <div draggable="true" class="test__item">11</div>
          <div draggable="true" class="test__item">111</div>
        </div>

        <div class="test">
          <div draggable="true" class="test__item">2</div>
          <div draggable="true" class="test__item">22</div>
          <div draggable="true" class="test__item">222</div>
        </div>

         <div class="test">
          <div draggable="true" class="test__item">3</div>
          <div draggable="true" class="test__item">33</div>
          <div draggable="true" class="test__item">333</div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    testStart(e) {
      e.target.classList.add('test-start')
    },
    testEnd(e) {
      e.target.classList.remove('test-start')
    },
    dragover(e) {
      // Разрешаем сбрасывать элементы в эту область
      // "deploy": "node ./node_modules/vue-gh-pages/index.js"
      // "homepage": "https://github.com/maxik12335/vue-tasks",
      e.preventDefault()
      // Находим перемещаемый элемент
      const activeElement = document.querySelector(`.test-start`)
      // Находим элемент, над которым в данный момент находится курсор
      const currentElement = e.target
      // Проверяем, что событие сработало:
      // 1. не на том элементе, который мы перемещаем,
      // 2. именно на элементе списка
      const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`tracker__task`)

      // Если нет, прерываем выполнение функции
      if (!isMoveable) {
         return;
      }

      // Находим элемент, перед которым будем вставлять
      const nextElement = (currentElement === activeElement.nextElementSibling) ?
      currentElement.nextElementSibling : currentElement;

      // Вставляем activeElement перед nextElement
        nextElement.insertAdjacentElement('beforeBegin', activeElement)
      // document.querySelector(`.test`).insertBefore(activeElement, nextElement)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test {
  border: 1px solid;
  padding: 20px;
}

.test__item {
  border: 1px solid;
  padding: 20px;
  cursor: pointer;
}

.test__item:not(:last-child) {
  margin-bottom: 30px;
}

.container {
  width: 800px;
  margin: 0 auto;
}

.trackers {
  border: 1px solid #e2e2e2;
  padding: 10px;

  display: flex;
  justify-content: space-between;
}

.tracker {
    width: 30%;
    min-height: 250px;
    border: 1px solid #e2e2e2;
    padding: 5px;
}

.tracker__task {
    border: 1px solid #e2e2e2;
    padding: 5px;
    color: #8d8d8d;
    cursor: pointer;
}

.tracker__task:not(:first-child):hover {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.2);
-moz-box-shadow:    0px 0px 5px 0px rgba(50, 50, 50, 0.2);
box-shadow:         0px 0px 5px 0px rgba(50, 50, 50, 0.2);
}

.tracker__task-title {
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #8d8d8d;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
}

.tracker__task:not(:last-child) {
  margin-bottom: 10px;
}

</style>
