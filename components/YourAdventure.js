import styles from "./YourAdventure.module.scss";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function insertAndShift(fromArr, toArr, from, to, sameArray) {
  let cutOut = fromArr.splice(from, 1)[0]; // cut the element at index 'from'

  if (sameArray) {
    toArr = [...fromArr];
  }

  toArr.splice(to, 0, cutOut); // insert it at index 'to'
  return { fromArr, toArr };
}

const eventList = [
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "1",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "2",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "3",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "4",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "5",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "6",
  },
  {
    title: "Build an 8-bit computer from scratch",
    type: "workshop",
    id: "7",
  },
];

export const YourAdventure = () => {
  const [events, setEvents] = useState(eventList);
  const [newEvents, setNewEvents] = useState([
    { title: "sdfsdf", type: "sdfsd", id: "1232" },
  ]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const reorderItems = (result) => {
    if (!result.destination) return;

    // please forgive me, for I have sinned -- Shubham Patil

    const arrKey = {
      timetable: [events, setEvents],
      timetable2: [newEvents, setNewEvents],
    };

    let fromArr = [...arrKey[result.source.droppableId][0]];
    let toArr = [...arrKey[result.destination.droppableId][0]];

    let sameArray =
      result.source.droppableId === result.destination.droppableId;

    const output = insertAndShift(
      fromArr,
      toArr,
      result.source.index,
      result.destination.index,
      sameArray
    );

    if (result.destination.droppableId === "timetable2") {
      setNewEvents(output.toArr);
    } else if (result.destination.droppableId === "timetable") {
      setEvents(output.toArr);
    }

    if (!sameArray) {
      if (result.source.droppableId === "timetable2") {
        setNewEvents(output.fromArr);
      } else if (result.source.droppableId === "timetable") {
        setEvents(output.fromArr);
      }
    }

    // if (result.source.droppableId !== result.destination.droppableId) {
    //   arrKey[result.source.droppableId][1]([...fromArr]);
    // }
  };

  return (
    <div className={styles.wrapper}>
      <h1>you decide your own adventure...</h1>
      <p>
        We’ll sleep in tents, build XYZ, barbecue by campfires, // 2-3 sentences
        concretely describing the event.
      </p>

      <p>
        There'll be endless creative spaces, never-ending entertainment, and all
        sorts of activities — let's create a world of our dreams under the
        stars.
      </p>

      <div>
        <DragDropContext onDragEnd={reorderItems}>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Droppable droppableId="timetable">
              {(provided) => (
                <>
                  <div
                    style={{ maxWidth: "500px", marginRight: "3vw" }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {events && loaded
                      ? events.map((event, i) => {
                          return (
                            <Draggable
                              key={event.id}
                              draggableId={event.id}
                              index={i}
                            >
                              {(providedDroppable) => {
                                return (
                                  <div
                                    ref={providedDroppable.innerRef}
                                    {...providedDroppable.draggableProps}
                                    {...providedDroppable.dragHandleProps}
                                    className={styles.event}
                                  >
                                    <p className={styles.eventtype}>
                                      {event.type}
                                    </p>
                                    <h4>{event.title}</h4>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })
                      : ""}
                  </div>
                  {/* {provided.placeholder} */}
                </>
              )}
            </Droppable>
            <Droppable droppableId="timetable2">
              {(provided) => (
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ marginRight: "10px" }}>
                    {[
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                    ].map((num, i) => {
                      return <p key={`hour-${num}`}>{num > 12 ? `${num - 12}pm` : `${num}am`}</p>;
                    })}
                  </div>
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      // height: "100%",
                      width: "100%",
                      border: "1px solid black",
                    }}
                  >
                    {newEvents && loaded
                      ? newEvents.map((event, i) => {
                          return event ? (
                            <Draggable
                              key={event.id}
                              draggableId={event.id}
                              index={i}
                            >
                              {(providedDroppable) => {
                                return (
                                  <div
                                    ref={providedDroppable.innerRef}
                                    {...providedDroppable.draggableProps}
                                    {...providedDroppable.dragHandleProps}
                                    className={styles.event}
                                  >
                                    <p className={styles.eventtype}>
                                      {event.type}
                                    </p>
                                    <h4>{event.title}</h4>
                                  </div>
                                );
                              }}
                            </Draggable>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </div>
                  {/* <div style={{ width: "100%" }}>{provided.placeholder}</div> */}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
