import React from "react";
const styles = {
  wrapper: {
    margin: 8,
    padding: 1,
    display: "flex",
    flexDirection: "row",
    border: "8px solid skyblue",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "green",
    fontSize: 40,
    fontWeight: "bold",
  },
  commentText: {
    color: "red",
    fontSize: 30,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLBHZ5fZgAU1R4R_Qpj-k5kwyeECUBNRMww&usqp=CAU"
          style={styles.image}
        />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
