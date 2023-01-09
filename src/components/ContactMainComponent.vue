<template>
    <h2 class="offset-md-1 col-11 contact-header">Contact</h2>
    <div class="container contact">
        <div class="offset-md-1 col-md-10 row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21872.834265001296!2d30.54516609923368!3d50.43011966627166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa04a0c8e5b%3A0x3b40a2bcbca08807!2z0JrQuNC10LLQvi3Qn9C10YfQtdGA0YHQutCw0Y8g0LvQsNCy0YDQsA!5e1!3m2!1sru!2sua!4v1672771353778!5m2!1sru!2sua" width="950" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="offset-md-3 сol-12 col-md-6 row contact-form">
            <h2 class="offset-md-1">Write to us</h2>
                <form class="сol-12 offset-md-1 row"   @submit.prevent="submit">
                    
                    <input class="сol-12 col-md-10" placeholder="Name *" id="name" type="text" name="name" v-model="state.name" required>
                    <div v-if="v$.name.$error" v-for="error in v$.name.$errors" :key="error.$nid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <input class="сol-12 col-md-10" placeholder="Email *" id="email" type="email" name="email" v-model="state.email" required>
                    <div v-if="v$.email.$error" v-for="error in v$.email.$errors" :key="error.$eid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <input class="сol-12 col-md-10" placeholder="Phone" id="phone" type="number" name="phone"  v-model="state.phone">
                    <div v-if="v$.phone.$error" v-for="error in v$.phone.$errors" :key="error.$pid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <textarea class="сol-12 col-md-10" rows="3" placeholder="Message *"  v-model="state.message" required></textarea>
                    <div v-if="v$.message.$error" v-for="error in v$.message.$errors" :key="error.$mesid" class="col-12 error-mes-area" style="color:red">{{ error.$message }}</div>
                    
                    <input type="submit" value="Send" class="col-3 ">
                </form>
        </div>
    </div>
</template>

<script>
    import { reactive, computed } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength } from '@vuelidate/validators'
    export default{
        setup () {
            const state = reactive({
                name: '',
                email:'',
                phone:'',
                message: '',
            })
            const rules = computed(() =>  {
                return {
                    name: {required, minLength: minLength(2)},
                    email:{ required, email},
                    phone: { minLength: minLength(9)},
                    message:{required, minLength: minLength(10)}
                }
            })
            const v$ = useVuelidate(rules, state)
            return{
                state, 
                v$
            }
        },
       
        methods: {
            submit(){
                console.log(this.v$)
                this.v$.$validate()
                if(!this.v$.$error){
                   alert("Submit success " + 'Name: ' + this.state.name + ' Email: ' + this.state.email + ' Phone: ' + this.state.phone + ' Message: ' + this.state.message) 
                } else{
                    alert("Submit not success") 
                }
                
            }
        },
    }
</script>

<style>
    .contact-header{
        font-size: 2em;
        color: #73726C;
        padding: 1em 25px 0em 25px;
        font-family: 'Old Standard TT', serif;
    }
    .contact{
        min-width: 100%;
    }
    .contact-form {
        padding:10px;
        margin-top: 50px;
    }
    .contact-form  h2{
        font-size: 1.5em;
        margin-bottom: 0.7em;
        font-family: 'Old Standard TT', serif;
        line-height: 1em;
        color: rgb(120, 118, 118);
    }
    .contact-form  input{
        margin-bottom: 15px;
        padding: 5px 10px ;
        font-size: 0.9em;
        opacity: 0.6;
        font-family: 'Raleway', sans-serif;
    }
    .contact-form textarea{
        font-family: 'Raleway', sans-serif;
        padding: 5px 10px;
        opacity: 0.6;
    }
    .contact-form input[type=submit]{
        background-color: #bfa145;
        transition: all 0.3s ease-in-out;
        color: white;
        margin: 10px 0;
        border: none;
        padding: 7px;
        opacity: 1;
    }
    .contact-form input[type=submit]:hover{
        background-color: #756534;
    }
    @media all and (max-width:767px ){
        .contact-form form{
            margin: 0 auto;
        }
    }
    .error-mes{
    font-size: small;
    margin: -10px 0 10px 0;
    }
    .error-mes-area{
    font-size: small;
    }
</style>