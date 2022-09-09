import {useField, useForm} from "vee-validate";
import * as yup from "yup";
// import {useStore} from "vuex"
// import {useRouter} from "vue-router";

export function useRequestForm(fn){
    // const store = useStore()
    // const router = useRouter()

    const {handleSubmit, isSubmitting} = useForm({
        initialValues:{
            status: "active"
        }
    })

    const {value:fish, errorMessage:fError, handleBlur:fBlur} = useField('fish',
        yup
            .string()
            .trim()
            .required("FISH.ni kiritish shart!")
    )

    const {value:phone, errorMessage:pError, handleBlur:pBlur} = useField('phone',
        yup
            .string()
            .required("Telefon raqamni kiritish shart!")
            .min(12,"Telefonni to'g'ri kiriting!")
    )

    const {value:sum, errorMessage:sError, handleBlur:sBlur} = useField('sum',
        yup
            .number()
            .required("Summa kiritilishi shart!")
            .min(1000,"Minimal summa 1000")
    )

    const {value:status,} = useField('status')

    const onSubmit = handleSubmit(fn)


    return{
        fish,
        fBlur,
        fError,
        phone,
        pError,
        pBlur,
        sum,
        sError,
        sBlur,
        status,
        onSubmit,
        isSubmitting,
    }
}