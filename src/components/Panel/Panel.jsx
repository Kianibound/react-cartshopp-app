import React, {useState} from "react";
import {uid} from "uid"
import {Slider, Form, Input, InputNumber, Col, Button, Space} from "antd";

const Panel = ({formData,setFormData,editData,setEditData}) => {
    const [price,setPrice] = useState(0)
    const [disc,setDisc] = useState(0)
    const [count,setCount] = useState(1)

    const finishHandler = (values) =>{
        if(editData){
            let temp = formData.filter (item => item.id !== editData.id)
            temp = [...temp,{
                ...values,
                id:editData.id
            }]
            setFormData(temp)
            setEditData(null)
        }else{
            setFormData(
                (prev)=>[
                    ...prev,
                    {
                        ...values,
                        id:uid()
                    }
                ])
        }

    }
    return (
        <>
            <Form onFinish={finishHandler}>
                <Form.Item label="name" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="name" rules={[{required: true, message: "Name is Required"}]}>
                        <Input size={"large"} placeholder="enter your product name" defaultValue={editData?.name ?? ""}/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="price" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="price" rules={[{required: true, message: "Price is Required"}]} >
                        <InputNumber onChange={value => setPrice(value)} size={"large"} style={{width: "100%"}} defaultValue={editData?.price ?? ""} controls={false} min={0} placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Count of product" labelAlign={"left"} labelCol={{span: 24}}>
                    <Form.Item name="count" rules={[{required: true, message: "Price is Required"}]} >
                        <InputNumber onChange={value => setCount(value)} size={"large"} style={{width: "100%"}} defaultValue={editData?.count ?? ""}  min={1} placeholder="enter your product name"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="discount" name={"discount"} labelAlign={"left"} labelCol={{span: 24}}>
                    <Slider tipFormatter={(value)=>`${value}%`} onChange={value => setDisc(value)}  min={0} max={100} defaultValue={editData?.discount??0}/>
                </Form.Item>
                <Form.Item>
                    <span>Final Price :</span>
                    <span style={{padding: "0 5px", fontWeight: "bold", fontSize: "24px"}}>
                        {count*(price - (price*disc/100))} $
                    </span>
                </Form.Item>
                <Form.Item>
                    {
                        editData ?
                            <Button htmlType={"submit"} shape={"round"} type="primary" block style={{marginTop: "30px", height: "50px"}} size={"large"}>
                                Edit
                            </Button>
                            :
                            <Button htmlType={"submit"} shape={"round"} type="primary" block style={{marginTop: "30px", height: "50px"}} size={"large"}>
                                Add
                            </Button>
                    }

                </Form.Item>
            </Form>
        </>
    )
}

export default Panel
