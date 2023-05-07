import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { createPortal } from "react-dom";
import Item from "antd/es/list/Item";
import { Button, Col, Form, Input, Row } from "antd";



export const TestPage = ({ }) => {
    const { script } = useContext(AppContext);
    console.log(script)

    useEffect(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.type = "module"
        document.head.appendChild(scriptElement);
    }, [script]);


    return (
       <Row justify="center" style={{marginTop: '20%'}}>
        <Col >
        <Form>
            <Form.Item label="Email">
                <Input />
            </Form.Item>
            <Form.Item label="Password">
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Test
            </Button>
        </Form>
        </Col>
       </Row>

    )
}