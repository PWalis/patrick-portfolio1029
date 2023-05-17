import React from "react";
import LargeWrapper from "./LargeWrapper";
import styles from "./CardDetails.module.css"
import Button from "./Button";

const CardDetails = (props) => {
    const details = {
        1: (
                <>
                <h1>This is card 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur nam at veritatis est deserunt quidem accusantium assumenda commodi praesentium magni, unde dicta consectetur. Ea perspiciatis omnis architecto porro ab labore, dicta nam minus sint aspernatur repellendus explicabo impedit quos! Cumque rerum iure corrupti debitis nemo impedit distinctio quo nulla officia veniam animi, eius dolores modi ab doloribus sed vitae quae explicabo similique dicta? Aperiam, officia voluptas! Sunt nihil ipsum aliquam, beatae ipsa quos consequatur! Voluptate mollitia doloremque quasi, itaque modi et dolores eaque ullam ad, libero ratione aspernatur recusandae dolorem ipsum quaerat sint minima nemo laboriosam eius optio deleniti.</p>
                </>
            ),
        2: (    
                <>
                <h1>This is card 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur nam at veritatis est deserunt quidem accusantium assumenda commodi praesentium magni, unde dicta consectetur. Ea perspiciatis omnis architecto porro ab labore, dicta nam minus sint aspernatur repellendus explicabo impedit quos! Cumque rerum iure corrupti debitis nemo impedit distinctio quo nulla officia veniam animi, eius dolores modi ab doloribus sed vitae quae explicabo similique dicta? Aperiam, officia voluptas! Sunt nihil ipsum aliquam, beatae ipsa quos consequatur! Voluptate mollitia doloremque quasi, itaque modi et dolores eaque ullam ad, libero ratione aspernatur recusandae dolorem ipsum quaerat sint minima nemo laboriosam eius optio deleniti.</p>
                </>
            ),
        3: (
                <>
                <h1>This is card 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur nam at veritatis est deserunt quidem accusantium assumenda commodi praesentium magni, unde dicta consectetur. Ea perspiciatis omnis architecto porro ab labore, dicta nam minus sint aspernatur repellendus explicabo impedit quos! Cumque rerum iure corrupti debitis nemo impedit distinctio quo nulla officia veniam animi, eius dolores modi ab doloribus sed vitae quae explicabo similique dicta? Aperiam, officia voluptas! Sunt nihil ipsum aliquam, beatae ipsa quos consequatur! Voluptate mollitia doloremque quasi, itaque modi et dolores eaque ullam ad, libero ratione aspernatur recusandae dolorem ipsum quaerat sint minima nemo laboriosam eius optio deleniti.</p>
                </>
            ),
        4: (
                <>
                <h1>This is card 4</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur nam at veritatis est deserunt quidem accusantium assumenda commodi praesentium magni, unde dicta consectetur. Ea perspiciatis omnis architecto porro ab labore, dicta nam minus sint aspernatur repellendus explicabo impedit quos! Cumque rerum iure corrupti debitis nemo impedit distinctio quo nulla officia veniam animi, eius dolores modi ab doloribus sed vitae quae explicabo similique dicta? Aperiam, officia voluptas! Sunt nihil ipsum aliquam, beatae ipsa quos consequatur! Voluptate mollitia doloremque quasi, itaque modi et dolores eaque ullam ad, libero ratione aspernatur recusandae dolorem ipsum quaerat sint minima nemo laboriosam eius optio deleniti.</p>
                </>
            ),
        5: (
                <>
                <h1>This is card 5</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur nam at veritatis est deserunt quidem accusantium assumenda commodi praesentium magni, unde dicta consectetur. Ea perspiciatis omnis architecto porro ab labore, dicta nam minus sint aspernatur repellendus explicabo impedit quos! Cumque rerum iure corrupti debitis nemo impedit distinctio quo nulla officia veniam animi, eius dolores modi ab doloribus sed vitae quae explicabo similique dicta? Aperiam, officia voluptas! Sunt nihil ipsum aliquam, beatae ipsa quos consequatur! Voluptate mollitia doloremque quasi, itaque modi et dolores eaque ullam ad, libero ratione aspernatur recusandae dolorem ipsum quaerat sint minima nemo laboriosam eius optio deleniti.</p>
                </>
            ),
    }

    return (
        <>
            <LargeWrapper>
                <div className={styles["detailWrapper"]}>
                    <Button onClick={props.onClickHandler}>Exit</Button>
                    {details[props.card]}
                </div>
            </LargeWrapper>
        </>
    )
}

export default CardDetails