<template>
    <div class="formNotes">
        <form @submit="submitNote">
            <div class="menu">
                <button type="button" @click="submitRemove" class="bg-danger btn btn-delete">Delete</button>
                <button type="submit" class="bg-success btn">Save</button>
            </div>

            <div class="content">
                <input type="text" name="" id="" class="text" v-model="id">
                <input type="text" name="" id="" class="text" placeholder="title" v-model="title">
                <textarea name="" id="" class="text" placeholder="apa notes anda..." v-model="description"></textarea>
            </div>
        </form>
    </div>
</template>

<script type="text/javascript">
    export default{
        name: 'formNotes',
        props: {
            propUpdateNote: {
                type: Function
            },
            propRemoveNote: {
                type: Function
            },
        },
        data: function(){
            return{
                id: 0,
                title: '',
                description: ''
            }
        },
        methods:{
            submitNote(e){
                e.preventDefault();

                let data = {
                    title: this.title,
                    description: this.description
                }

                if(this.id === 0){
                    this.$root.$emit('emitSaveNote', data);
                }else{
                    data.id = this.id;
                    this.$root.$emit('emitUpdateNote', data);
                }
            }, 
            resetInput(){
                this.id= 0;
                this.title= '';
                this.description= '';
            },
            submitRemove(){
                let data = {id: this.id}
                this.$root.$emit('emitRemoveNote', data)
                this.resetInput();
            }
        },
        mounted(){
            this.$root.$on('emitForm', data => {
                this.id = data.id;
                this.title = data.title;
                this.description = data.description;
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
     background: #f7f7f7;
     padding:10px 25px;
     margin-bottom: 25px;
     text-align:right;
     border-bottom: 1px solid #e8e6e6;
}
.btn-delete{ margin-right:10px; }
.content{
     padding: 0px 25px;
}
.text{
     display: block;
     width: 100%;
     padding: 0px;
     font-size: 20px;
     font-weight: bold;
     color: #2c3e50;
     border: none;
     margin-bottom: 10px;
     box-sizing: border-box;
     outline: none;
}
.textarea{
     min-height: 350px;
     font-size: 15px;
     font-weight: lighter;
     line-height: 30px;
}
.loader{
     vertical-align: middle;
}
</style>
