import React, {useState} from 'react';
import {Modal, Button, Select, Typography, Row} from 'antd';
import RichTextEditor from "../../RichTextEditor";
import {RICH_TEXT_EDITOR_WIDTH} from "../../../utilities/constants";
import AttachmentsWithUpload from "../../AttechmentsWithUpload";
import {UploadFile} from "antd/es/upload/interface";

type Props = {
    modal?: boolean;
    closeModal: any;
    submit: Function;
    message?: string;
    fileList: UploadFile[],
    setFileList: Function,
    deliveryMessage: string,
    setDeliveryMessage: Function
};

const ToReviewModal: React.SFC<Props> = ({
                                             modal,
                                             closeModal,
                                             submit,
                                             message,
                                             fileList,
                                             setFileList,
                                             deliveryMessage,
                                             setDeliveryMessage
                                         }) => {
    const handleCancel = () => {
        closeModal(!modal);
    };

    const handleOk = () => {
        submit();
    }

    return (
        <>
            <Modal
                width={RICH_TEXT_EDITOR_WIDTH}
                visible={modal}
                onCancel={handleCancel}
                footer={[
                    <Button style={{borderRadius: 4, borderWidth: 0, width:76, height:32, marginRight: 8}} key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button style={{borderRadius: 4, width:79, height:32}} key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>]}
                maskClosable={false}
            >
                <Row>
                    <Typography.Text style={{fontSize: 22}} strong>Submit your work for review</Typography.Text>
                </Row>
                <h3>Task: <strong>{message}</strong></h3>
                <p>Delivery message:</p>
                <RichTextEditor initialHTMLValue={deliveryMessage} onChangeHTML={setDeliveryMessage}/>
                <AttachmentsWithUpload data={fileList} setData={setFileList}/>
            </Modal>
        </>
    );
}

export default ToReviewModal;
