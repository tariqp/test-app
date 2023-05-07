import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { createPortal } from "react-dom";
import Item from "antd/es/list/Item";
import { Button, Col, Form, Input, Row } from "antd";



export const TestPage = ({ }) => {
    const { script, isEmail, isPhone } = useContext(AppContext);
    console.log(script)

    useEffect(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.type = "module"
        document.head.appendChild(scriptElement);
    }, [script]);


    return (
        <Row justify="center" style={{ marginTop: '20%' }}>
            <Col >
                <Form className="test-form-auth">
                    {isEmail && (
                        <Form.Item label="Email">
                            <Input className="test-email-auth"/>
                        </Form.Item>
                    )}
                    {isPhone && (
                        <Form.Item  label="Phone">
                            <Input className="test-phone-auth" />
                        </Form.Item>
                    )}
                    <Button type="primary" htmlType="submit" className="test-button-auth">
                        Test
                    </Button>
                </Form>
            </Col>
        </Row>

    )
}