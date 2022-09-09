import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex"
import {useRouter} from "vue-router";

export function useLoginForm(){
    const store = useStore()
    const router = useRouter()

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value:email, errorMessage:eError, handleBlur:eBlur} = useField('email',
        yup
            .string()
            .email("Pochtani to'g'ri kiriting!")
            .required("Emailni kiritish shart!")
            .trim()
    )
    const {value:password, errorMessage:pError, handleBlur:pBlur} = useField('password',
        yup
            .string()
            .min(5,"Parol 5 tadan kam bo'masligi kerak!")
            .required("Parolni kiritish shart!")
    )

    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('auth/login', values)
            router.push("/")
        }
        catch (e) {
            throw new Error()
        }
    })

    const urinishlarSoni = computed(()=>submitCount.value > 3)

    watch(urinishlarSoni, val=>{
        if (val){
            setTimeout(()=>submitCount.value = 0, 3000)
        }
    })

    return{
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
        urinishlarSoni
    }
}