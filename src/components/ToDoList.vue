<template>
    <div class="hello">
        <input
            type="text"
            v-model="newItem"
            @keyup.enter="addNew"
        />
        <ul class="list">
            <li 
                v-for="todo in todolist"
                :key='todo.title'>
                {{todo.title}}
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

    export default {
        name: 'ToDoList',
        data: function() {
           return {
                newItem: ''
            }
        },
        computed: {
            doneTodos () {
                return this.$store.getters.doneTodos
            }, 
            ...mapState({
                todolist: state => state.todos
            })
        },
        methods: {
            ...mapMutations({
                add: 'addToDo'
            }),
            addNew: function() {
                let newToDo = {
                    title: this.newItem,
                    done: false
                }
                this.newItem = ''
                this.add(newToDo)
            }
        }
    };
</script>
