import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = '';

export const Email = ({
    userFirstName,
    duration,
    meetingTime,
    date,
    meetingUrl,
    businessName
}) => {
    return (
        <Html>
            <Head />
            <Preview>Meeting Confirmation</Preview>
            <Body style={main}>
                <Container>
                    

                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                src={'https://marketplace.canva.com/EAFLhDqSu-c/1/0/1600w/canva-blue-and-yellow-modern-business-twitter-header-q-uFVr37CSY.jpg'}
                            />
                        </Row>

                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Hi {userFirstName},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Thank you for scheduling a meeting with {businessName},
                                </Heading>
                                <Text>Please find the meeting details:</Text>
                                <Text style={paragraph}><b>Time:</b> {meetingTime}</Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}><b>Date:</b> {date}</Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}><b>Location:</b> <a href={meetingUrl}>{meetingUrl}</a></Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}><b>Duration:</b> {duration}</Text>
                                <Text style={{ color: "rgb(0,0,0, 0.5)", fontSize: 14, marginTop: -5 }}>
                                    *Please join the meeting using the above details.
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{ ...boxInfos, paddingTop: "0" }}>
                            <Column style={containerButton} colSpan={2}>
                                <Button style={button} href={meetingUrl}>Join Now</Button>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={containerImageFooter}>
                        <Img
                            style={image}
                            width={620}
                            src={'https://marketplace.canva.com/EAFLhDqSu-c/1/0/1600w/canva-blue-and-yellow-modern-business-twitter-header-q-uFVr37CSY.jpg'}
                        />
                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2025 | ScheduleX, Nikunj Agarwal, India | Thanks
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default Email;

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
    textDecoration: "none"
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};
