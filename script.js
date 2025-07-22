const app = Vue.createApp({
    data(){
        return{
                firstName: 'John',
                lastName: 'Doe',
                age: 20,
                picture: 'https://randomuser.me/api/portraits/men/10.jpg',
                gender: 'male',
                hobbies: ['coding', 'reading', 'traveling'],
                address: {
                    street: '123 Main St',
                    city: 'Anytown',
                    state: 'CA'
                },
                method : {
                    getUser(){
                        console.log(this.firstName);
                }
            }
        }
    },
})

app.mount('#app')