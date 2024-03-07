export function useLocalStorage(key: string){
    const state = ref()

    onMounted(() =>{
        const item = localStorage.getItem(key)

        try{
            const value = item ? JSON.parse(item) : undefined
            state.value = value
        }catch{
            state.value = item 
        }
    })

    watch(state,(newState) => {
        localStorage.setItem(key, newState)
    })
    return{ value: state}
}