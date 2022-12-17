import {useEffect} from 'react'

const useCountTitle = (count) => {
    useEffect(() => {
      if(count=>1)
      {
        document.title=(`chats(${count})`)
      }
      else
      {
        document.title=(`chat`)

      } 
    }, [count])
    
  
}

export default useCountTitle