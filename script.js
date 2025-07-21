
        document.addEventListener('DOMContentLoaded', () => {
            // --- STATE ---
            let todos = [];
            let todoIdCounter = 1;
            let draggedItem = null; 

            // --- DOM ELEMENTS ---
            const todoInput = document.getElementById('todoInput');
            const addBtn = document.getElementById('addBtn');
            const todoList = document.getElementById('todoList');
            const totalTasks = document.getElementById('totalTasks');
            const completedTasks = document.getElementById('completedTasks');

            // --- EVENT LISTENERS ---
            addBtn.addEventListener('click', addTodo);
            todoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    addTodo();
                }
            });

            // Using event delegation for all clicks within the todo list
            todoList.addEventListener('click', (e) => {
                const target = e.target;
                const parentLi = target.closest('.todo-item');
                if (!parentLi) return;

                const todoId = Number(parentLi.dataset.id);

                if (target.closest('.delete-btn')) {
                    deleteTodo(todoId);
                } else if (target.closest('.checkbox')) {
                    toggleTodo(todoId);
                } else if (target.closest('.up-btn')) {
                    moveTodo(todoId, 'up');
                } else if (target.closest('.down-btn')) {
                    moveTodo(todoId, 'down');
                }
            });
            
            // --- DRAG & DROP EVENT LISTENERS ---
            todoList.addEventListener('dragstart', (e) => {
                draggedItem = e.target;
                setTimeout(() => e.target.classList.add('dragging'), 0);
            });

            todoList.addEventListener('dragover', (e) => {
                e.preventDefault(); 
                const afterElement = getDragAfterElement(todoList, e.clientY);
                const currentDraggable = document.querySelector('.dragging');
                
                const prevDragOver = document.querySelector('.drag-over');
                if (prevDragOver) {
                    prevDragOver.classList.remove('drag-over');
                }

                if (afterElement == null) {
                    if (currentDraggable) todoList.appendChild(currentDraggable);
                } else {
                    if (currentDraggable) {
                       afterElement.classList.add('drag-over');
                    }
                }
            });
            
            todoList.addEventListener('drop', (e) => {
                e.preventDefault();
                const draggedId = Number(draggedItem.dataset.id);
                const dropTarget = e.target.closest('.todo-item');
                
                if (dropTarget && Number(dropTarget.dataset.id) !== draggedId) {
                    const targetId = Number(dropTarget.dataset.id);
                    reorderTodos(draggedId, targetId);
                }
                
                 const dragOverEl = document.querySelector('.drag-over');
                 if(dragOverEl) dragOverEl.classList.remove('drag-over');
            });

            todoList.addEventListener('dragend', () => {
                if (draggedItem) {
                    draggedItem.classList.remove('dragging');
                    draggedItem = null;
                }
            });


            // --- FUNCTIONS ---
            function addTodo() {
                const todoText = todoInput.value.trim();
                if (todoText === '') return;
                
                const todo = {
                    id: todoIdCounter++,
                    text: todoText,
                    completed: false
                };
                todos.push(todo);
                todoInput.value = '';
                renderAndSave();
            }

            function deleteTodo(id) {
                todos = todos.filter(todo => todo.id !== id);
                renderAndSave();
            }

            function toggleTodo(id) {
                const todo = todos.find(todo => todo.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
                renderAndSave();
            }
            
            // New function to move a todo item up or down
            function moveTodo(id, direction) {
                const index = todos.findIndex(todo => todo.id === id);
                if (index === -1) return;

                if (direction === 'up' && index > 0) {
                    // Swap with the element before it
                    [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
                } else if (direction === 'down' && index < todos.length - 1) {
                    // Swap with the element after it
                    [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
                }
                
                renderAndSave();
            }

            function reorderTodos(draggedId, targetId) {
                const draggedIndex = todos.findIndex(todo => todo.id === draggedId);
                const targetIndex = todos.findIndex(todo => todo.id === targetId);

                if (draggedIndex === -1 || targetIndex === -1) return;

                const [draggedItemData] = todos.splice(draggedIndex, 1);
                todos.splice(targetIndex, 0, draggedItemData);

                renderAndSave();
            }

            function renderTodos() {
                todoList.innerHTML = '';
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                    li.setAttribute('draggable', 'true');
                    li.dataset.id = todo.id;

                    li.innerHTML = `
                        <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
                        <span class="todo-text">${todo.text}</span>
                        <div class="action-buttons">
                            <button class="arrow-btn up-btn" aria-label="Move up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                                </svg>
                            </button>
                            <button class="arrow-btn down-btn" aria-label="Move down">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </button>
                            <button class="delete-btn" aria-label="Delete">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    `;
                    todoList.appendChild(li);
                });
            }

            function updateStats() {
                const total = todos.length;
                const completed = todos.filter(todo => todo.completed).length;
                totalTasks.textContent = `Total: ${total}`;
                completedTasks.textContent = `Completed: ${completed}`;
            }
            
            function renderAndSave() {
                renderTodos();
                updateStats();
            }
            
            function getDragAfterElement(container, y) {
                const draggableElements = [...container.querySelectorAll('.todo-item:not(.dragging)')];

                return draggableElements.reduce((closest, child) => {
                    const box = child.getBoundingClientRect();
                    const offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closest.offset) {
                        return { offset: offset, element: child };
                    } else {
                        return closest;
                    }
                }, { offset: Number.NEGATIVE_INFINITY }).element;
            }
        });