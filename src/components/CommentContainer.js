import React from "react";
import { FaCircleUser } from "react-icons/fa6";
const commentsData = [
  {
    name: "John",
    comment: "Great job!",
    replies: [
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
          {
            name: "User",
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [],
          },
          {
            name: "User",
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [
              {
                name: "User",
                comment:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [],
              }
            ],
          },
        ],
      },
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
    ],
  },
  {
    name: "Sarah",
    comment: "I like it.",
    replies: [],
  },
  {
    name: "Michael",
    comment: "Could be better.",
    replies: [
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
    ],
  },
  {
    name: "Emily",
    comment: "Not bad.",
    replies: [
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      },
    ],
  },
  {
    name: "David",
    comment: "Impressive work!",
    replies: [
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
          {
            name: "User",
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [],
          },
          {
            name: "User",
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            replies: [],
          }
        ],
      }
    ],
  },
  {
    name: "Jessica",
    comment: "I don't understand it.",
    replies: [
      {
        name: "User",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [],
      }
    ],
  },
  {
    name: "Daniel",
    comment: "Well done.",
    replies: [],
  },
  {
    name: "Olivia",
    comment: "I have no words.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex items-center p-2 my-2 bg-gray-200 rounded-xl">
      <span className="mx-3 text-4xl">
        <FaCircleUser />
      </span>
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-7 border border-l-black">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="my-8 font-semibold">
      <p className="text-2xl font-semibold">Comments ({commentsData.length})</p>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
