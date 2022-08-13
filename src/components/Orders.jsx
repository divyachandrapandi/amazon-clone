import React,{useState, useEffect} from 'react';
import { db } from "../firebase";
import "./styles/Orders.css";
import {useStateValue} from "./context/StateProvider";
import Order from "./Order";

function Orders() {
  const [{basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] =useState([]);


useEffect(() => {

  if (user){

  
    console.log(user)
    // db.collection('users')
    // .doc(user?.id)
    // .collection('orders')
    // .get().then(snapshot => {
    //   const student = []
    //   snapshot.forEach(doc => {
    //     const data = doc.data()
    //     student.push(data)
    //   })
    //   console.log(student)
    //   console.log(snapshot)
    // })
    // .catch(error => console.log(error))
  db.collection('users')
    .doc(user?.uid)
    .collection("orders")
    .orderBy("created","desc")
    .onSnapshot(snapshot => (
       setOrders(snapshot.docs.map(doc => ({
        id:doc.id,
        data : doc.data()
       })))
    ))
  console.log( "orders" , orders)}
    else {
      console.log("Nouser")
      setOrders([])
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])

  return (
    <div className='orders'>
        <h1>Your orders</h1>
        <div className='orders__order'>
          {orders?.map((order) => <Order order={order} />)}
        </div>
    </div>
  )
}

export default Orders