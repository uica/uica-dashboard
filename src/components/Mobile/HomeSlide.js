import React, { useEffect, useState } from "react";
import { Grid, Item, Icon, Button, Modal } from "semantic-ui-react";
import axios from "axios";
const HomeSlide = (props) => {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [closeOnEscape, setCloseOnEscape] = useState(false);
  const [deleteThis, setDeleteThis] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/slideimages`)
      .then(({ data }) => {
        console.log(`local:debug: HomeSlide -> data`, data);
        setImages(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const closeModal = () => {
    setDeleteThis(null);
    setOpenModal(false);
    setCloseOnEscape(false);
  };
  const configModal = (item) => {
    setDeleteThis(item);
    setOpenModal(true);
    setCloseOnEscape(true);
  };
  const handleDelete = () => {
    setOpenModal(false);
    setCloseOnEscape(false);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/slideimages`, {
        data: deleteThis,
      })
      .then((res) => {
        console.log(res);
      });
    const newImgs = images.filter((img) => img.id !== deleteThis.id);
    setImages(newImgs);
  };
  const styles = {
    itemContainer: {
      boxShadow: "0 0 0.2em #aaa",
      padding: "1em",
      margin: "1em",
    },
    itemFeature: {
      background: "#f3f3f3",
      padding: "0.4em",
      display: "flex",
      margin: "0.1em 0",
      justifyContent: "space-between",
      borderRadius: "3px",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    itemBtnContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    itemBtn: {
      marginLeft: "0.5em",
      marginTop: "0.5em",
    },
  };
  return (
    <Grid>
      <Modal
        open={openModal}
        closeOnEscape={closeOnEscape}
        onClose={closeModal}
      >
        <Modal.Header>Delete slide</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this slide?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal} content="Cancel" />
          <Button
            onClick={handleDelete}
            negative
            labelPosition="right"
            icon="times"
            content="Delete"
          />
        </Modal.Actions>
      </Modal>
      <Grid.Row>
        <Grid.Column width="15">
          <Item.Group>
            {images.map((img) => (
              <Item style={styles.itemContainer} key={img.id}>
                <Item.Image size="medium" src={img.image_url} />
                <Item.Content style={styles.content}>
                  <Item.Header as="h3">{img.caption}</Item.Header>
                  <Item.Description>
                    <div style={styles.itemFeature}>
                      Has button
                      {img.hasBtn ? (
                        <Icon name="check circle" color="green" />
                      ) : (
                        <Icon name="times circle" color="red" />
                      )}
                    </div>
                    {img.hasBtn && (
                      <div>
                        <div style={styles.itemFeature}>
                          <div>Button text:</div>
                          <div>{img.btnText}</div>
                        </div>
                        <div style={styles.itemFeature}>
                          <div>Button link:</div>
                          <div>{img.btnLinkTo}</div>
                        </div>
                      </div>
                    )}
                  </Item.Description>
                  <Item.Description>
                    <div style={styles.itemBtnContainer}>
                      <Button
                        size="tiny"
                        negative
                        onClick={() => configModal(img)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Item.Description>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomeSlide;
