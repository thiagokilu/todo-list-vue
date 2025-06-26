<template>
  <div class="main">
    <div class="input-container">
      <input
        type="text"
        class="input-text"
        v-model="inputText"
        @keyup.enter="adicionar"
      />
      <input
        type="date"
        name="date"
        id="date"
        v-model="inputDate"
        class="input-date"
        @keyup.enter="adicionar"
      />
      <p @click="adicionar" class="btn">
        <VIcon name="bi-clipboard2-plus-fill" scale="2" />
      </p>
    </div>
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Tarefa</th>
          <th>Prazo</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="item in tarefas">
        <tr :key="item.id">
          <td><input type="checkbox" v-model="item.status" /></td>
          <td :class="{ 'line-through': item.status }">{{ item.nome }}</td>
          <td>{{ item.prazo }}</td>
          <th @click="remover(item.id)" class="remove">
            <VIcon name="io-trash-outline" />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TheTable",
  data() {
    return {
      inputText: "",
      checkbox: false,
      inputDate: null,
      tarefas: [
        { status: false, id: 0, nome: "Estudar Vue", prazo: "2025-06-30" },
        {
          status: false,
          id: 1,
          nome: "Finalizar projeto",
          prazo: "2025-07-01",
        },
      ],
    };
  },
  methods: {
    adicionar() {
      if (this.inputText === "") {
        return alert("input vazio");
      }

      if (this.inputDate === null) {
        return alert("data vazio");
      }

      console.log(this.inputDate);
      this.tarefas.push({
        id: this.tarefas.length - 1 + 1,
        nome: this.inputText,
        status: false,
        prazo: this.inputDate,
      });
      console.log(this.tarefas);
    },
    remover(id) {
      this.tarefas = this.tarefas.filter((item) => item.id !== id);
    },
  },
};
</script>
<style>
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.input-text {
  border: 2px solid black;
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  background-color: white;
  color: black;
  outline: none;
  margin-left: 10px;
  line-height: 1;
}

.input-text:focus {
  border-color: #007bff;
}

.btn {
  cursor: pointer;
}

.btn:hover {
  color: #007bff;
}

table {
  min-width: 500px;
  max-width: 600px;
}

th {
  border: 2px solid black;
}

td {
  border: 2px solid black;
}

.line-through {
  text-decoration: line-through;
}

.remove {
  font-weight: bold;
  cursor: pointer;
}

.input-date {
  border: 2px solid black;
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  background-color: white;
  color: black;
  outline: none;
  margin-left: 10px;
  line-height: 1;
}

.input-date:focus {
  border-color: #007bff;
}
</style>
