import React, { useState, useEffect } from 'react';
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const Private = [
    { value: 0, label: 'Private'},
    { value: 1, label: 'Public'}
]

const Category = [
    { value: 0, label: 'Film & Animation'},
    { value: 0, label: 'Autos & Vehicles'},
    { value: 0, label: 'Music'},
    { value: 0, label: 'Pets & Animals'},
    { value: 0, label: 'Sports'},
]

function VideoUploadPage() {
    
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [privacy, setPrivacy] = useState(0);
    const [Categories, setCategories] = useState("Film & Animation");

    const handleChangeTitle = (event) => {
        console.log(event.currentTarget.value);
        setTitle(event.currentTarget.value);
    }

    const handleChangeDescription = (event) => {
        console.log(event.currentTarget.value);
        setDescription(event.currentTarget.value);
    }

    const handleChangeOne = (event) => {
        setPrivacy(event.currentTarget.value);
    }

    const handleChangeTwo = (event) => {
        setCategories(event.currentTarget.value);
    }

    const onSubmit = () => {

    }

    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{ textAlign:'center', marginBottom:'2rem' }}>
                <Title levle={2}>Upload Video</Title>
            </div>

            <Form onSubmit={onSubmit}>
                <div style={{ display:'flex', justifyContent:'space-between' }}>
                    {/* Drop zone */}
                    <Dropzone
                        onDrop
                        multiple
                        maxSize
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width:'300px', height:'240px', border:'solid 1px lightgray',
                                display:'flex', alignItems:'center', justifyContent:'center' }} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PlusOutlined style={{ fontSize: '3rem' }} />
                            </div>
                        )}
                    </Dropzone>

                    {/* Thumbnail */}

                    <div>
                        <img src alt></img>
                    </div>
                </div>
                <br />
                <br />

                <label>Title</label>
                <Input
                    onChange={handleChangeTitle}
                    value={title}
                />
                <br />
                <br />

                <label>Description</label>
                <TextArea
                    onChange={handleChangeDescription}
                    value={Description}
                />
                <br />
                <br />

                <select onChange={handleChangeOne}>
                    {Private.map((item, index) =>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br />
                <br />

                <select onChange={handleChangeTwo}>
                    {Category.map((item, index) =>(
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </select>
                <br />
                <br />

                <Button type="primary" size="large" onClick>
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default VideoUploadPage
