import { Button, Col, Divider, Form, Input, Radio, Row, Select, Typography } from "antd"
import './HomePage.css'; // Import a CSS file for custom styles
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";



export const HomePage = ({ }) => {
    const { isEmail, isPhone, setIsEmail, setIsPhone, setScript} = useContext(AppContext);
    const navigate = useNavigate();
    console.log(isEmail);

    const selectValidation = (email: boolean, phone: boolean) => { 
        setIsEmail(email);
        setIsPhone(phone);
    }

    return (
        <div className="container">
            <div className="centered-content">
                <Typography.Title>
                    Please select what you are testing in your
                </Typography.Title>
                <Row justify="space-around">
                    <Col span={12}>
                        <Form
                            labelCol={{ span: 12 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal"
                            style={{ maxWidth: 600 }}
                        >
                            <Form.Item label="Form Size" name="size">
                                <Radio.Group>
                                    <Radio.Button onClick={(() => {
                                        selectValidation(true, false);
                                    })} value="small">Only email</Radio.Button>
                                    <Radio.Button onClick={(() => {
                                          selectValidation(false, true);
                                    })}value="default">Only Phone</Radio.Button>
                                    <Radio.Button onClick={(() => {
                              selectValidation(true, true);
                                    })}
                                    value="large">Both</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Select type">
                                <Select>
                                    <Select.Option value="demo">On Change</Select.Option>
                                    <Select.Option value="demo">On Select</Select.Option>
                                    <Select.Option value="demo">On Blur</Select.Option>
                                    <Select.Option value="demo">On Click</Select.Option>
                                </Select>
                            </Form.Item>
                            {isEmail && (
                                <Form.Item label="E-mail selector">
                                    <Input />
                                </Form.Item>
                            )}
                            {isPhone && (
                                <Form.Item label="Phone selector">
                                    <Input />
                                </Form.Item>
                            )}
                            <Form.Item label="Button selector">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Form selector">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Script URL">
                                <Input onChange={(event) => { 
                                    setScript(event.target.value);
                                }}/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: '62%' }} onClick={() => { 
                                navigate('/test');
                            }}>
                                Test your script
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}