import React from "react";
import { Card } from "../Card/card";
import { CardListProps } from "./card-list.props";

const CardList = (props: CardListProps): JSX.Element => {
  const { data } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            author={item.author}
            category={item.category}
            content={item.content}
            date={item.date}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </>
  );
};

export default CardList;
