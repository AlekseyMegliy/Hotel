<template>
    <div class="conteiner home-form">
        <div class="row">
            <div class="video col-md-6">
                <iframe class="col-12" title="vimeo-player" src="https://player.vimeo.com/video/55057393?h=fe0df60a3b" width="700" height="420" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="form col-md-3">
                <h2>Reservation</h2>
                <form  @submit.prevent="submit">
                    <input class="col-12" placeholder="Name *" id="name" type="text" name="name" v-model="state.name" required>
                    <div v-if="v$.name.$error" v-for="error in v$.name.$errors" :key="error.$nid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <input class="col-12" placeholder="Email *" id="email" type="email" name="email" v-model="state.email" required>
                    <div v-if="v$.email.$error" v-for="error in v$.email.$errors" :key="error.$eid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <input class="col-12" placeholder="Number: +123(45)6789012" id="phone" type="number" name="phone"  v-model="state.phone">
                    <div v-if="v$.phone.$error" v-for="error in v$.phone.$errors" :key="error.$pid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                    <div class="col-12 selectors">
                       
                        <select  class="select-number" v-model="state.rooms" required>
                            <option value="">No. of Rooms *</option>
                            <option v-for="room in 5"
                                :key="room"
                                :value="room">
                                {{ room }}
                            </option>
                        </select>
                        <div v-if="v$.rooms.$error" v-for="error in v$.rooms.$errors" :key="error.$rid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    
                        <select class="select-number"  v-model="state.adults" required>
                            <option value="">No. of Adult *</option>
                            <option v-for="adults in 5"
                                :key="adults"
                                :value="adults">
                                {{ adults }}
                            </option>
                        </select> 
                        <div v-if="v$.adults.$error" v-for="error in v$.adults.$errors" :key="error.$aid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                        
                        <Datepicker class="select-date col-12" v-model="date" :format='format' range></Datepicker>
                        <div v-if="v$.datev.$error" v-for="error in v$.datev.$errors" :key="error.$nid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>
                    </div>
                    <textarea class="col-12" rows="3" placeholder="Message" v-model="state.message"></textarea>
                    <div v-if="v$.message.$error" v-for="error in v$.message.$errors" :key="error.$mesid" class="col-12 error-mes" style="color:red">{{ error.$message }}</div>

                    <input type="submit" value="Submit" class="col-3 col-md-4">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive, computed, ref, onMounted } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, minLength, minValue } from '@vuelidate/validators'
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { useToast } from "vue-toastification"


    
    export default{
        setup () {
            const toast = useToast();
            const date = ref();
            const state = reactive({
                name: '',
                email:'',
                phone:null,
                rooms:'',
                adults: '',
                datev: date,
                message: ''
            })
            const rules = computed(() =>  {
                return {
                    name: {required, minLength: minLength(2)},
                    email:{ required, email},
                    phone: { minLength: minLength(12)},
                    rooms:{required, minValue:minValue(1)},
                    adults:{required, minValue:minValue(1)},
                    datev:{required},
                    message:{minLength: minLength(10)}
                    
                }
            })
            onMounted(() => {
            const startDate = new Date(new Date().setDate(new Date().getDate() + 1));
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })
        const format = ([startDate, endDate]) => {
            const startday = startDate.getDate();
            const startmonth = startDate.getMonth() + 1;
            const startyear = startDate.getFullYear();
            const endday = endDate.getDate();
            const endmonth = endDate.getMonth() + 1;
            const endyear = endDate.getFullYear();
        

            return `${startday}/${startmonth}/${startyear} ~ ${endday}/${endmonth}/${endyear} `;
        }
            const v$ = useVuelidate(rules, state)
            return{
                state, 
                v$,
                date,
                format,
                toast
            }
        },
        components: { Datepicker },
        data() {
            return {
               
            }
        },
        methods: {
            submit(){
                console.log(this.v$)
                this.v$.$validate()
                if(!this.v$.$error){
                   `alert("DATA:" + ' Name: ' + this.state.name + ' Email: ' + this.state.email + ' Phone: ' + 
                   this.state.phone + ' No. of Rooms: ' + this.state.rooms + ' No. of Adults: ' + this.state.adults + 
                   ' Date: '+ this.date + ' Massege: ' + this.state.message) `
                   this.toast.success("Submit success!")
                } else{
                    this.toast.error("Submit not success")
                }
                
            }
        },
    }


</script>


<style>
.home-form{
    margin: 100px 0px 100px 15px;
}
@media all and (max-width:600px ){
    .home-form{
    margin: 0px 0px 100px 15px;
    }
}
.home-form .row{
    width: 100%;
    justify-content: center;
    display: flex;
}
.home-form .video{
    padding: 0 10px;
    text-align: end;
}
.home-form iframe{
    margin: 0;
    padding: 0;
  
}
.home-form .form{
    padding:10px;
   
    justify-content: space-between;
}
.home-form .form h2{
    font-size: 1.5em;
    margin-bottom: 0.7em;
    font-family: 'Old Standard TT', serif;
    line-height: 1em;
    color: rgb(120, 118, 118);
}
.home-form .form input{
    margin-bottom: 15px;
    padding: 5px 10px ;
    font-size: 0.9em;
    opacity: 0.6;
    font-family: 'Raleway', sans-serif;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.home-form .form .selectors{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.home-form .form .selectors select{
    cursor: pointer;
    margin-bottom: 15px;
    padding: 5px 10px ;
    font-size: 0.9em;
    opacity: 0.6;
    transition: opacity linear 0.2s;
}
.home-form .form .selectors select:hover{
    opacity: 1;
    font-weight: 600;
}

.home-form .form .selectors select option{
    padding: 10px;
    font-size: 0.8em;
    font-family:Arial, Helvetica, sans-serif;
}
.home-form .form .selectors .select-number{
   width: 47%;
}
.home-form .form .selectors .select-date input{
  margin-bottom: 0;
  padding: 6px 12px 6px 35px;
  border: 1px solid rgba(0, 0, 0, 0.479);
}
.home-form .form .selectors .select-date{
    margin-bottom: 15px;
}
.home-form .form textarea{
    font-family: 'Raleway', sans-serif;
    padding: 5px 10px;
    opacity: 0.6;
}
.home-form .form input[type=submit]{
    background-color: #bfa145;
    transition: all 0.3s ease-in-out;
    color: white;
    border: none;
    padding: 7px;
    opacity: 1;
}
.home-form .form input[type=submit]:hover{
    background-color: #756534;
   
   
}
.home-form .form .error-mes{
    font-size: small;
    margin: -10px 0 10px 0;
}
</style>