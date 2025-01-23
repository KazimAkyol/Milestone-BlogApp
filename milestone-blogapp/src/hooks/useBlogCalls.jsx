import React from 'react'
import {useDispatch} from "react-redux"
import { fetchStart } from '../features/blogSlice'

const useBlogCalls = () => {

    const dispatch = useDispatch()

    const getBlogData = async (url)=>{
        dispatch(fetchStart())

        try {
            const {data} = 
        } catch (error) {
            
        }
    }

  return {}
}

export default useBlogCalls