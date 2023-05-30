import styles from "./YourAdventure.module.scss";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Zoom, Fade } from "react-reveal";

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
    title: "Build an 8-Bit Computer from Scratch",
    type: "workshop",
    id: "1",
  },
  {
    title: "Ultimate Frisbee",
    type: "outdoor activity",
    id: "2",
  },
  {
    title: "Restoring & Repairing an Original iMac",
    type: "exploration session",
    id: "3",
  },
  {
    title: "Guitar Jam Session",
    type: "activity",
    id: "4",
  },
  {
    title: "Building Our Own Transport Card System",
    type: "workshop",
    id: "5",
  },
  {
    title: "BBQ by the Beach",
    type: "meal",
    id: "6",
  },
  {
    title: "Hike up Mt. Sarah",
    type: "outdoor activity",
    id: "7",
  },
  {
    title: "",
    type: "",
    id: "8",
    editable: true
  }
];

export const YourAdventure = () => {
  const [events, setEvents] = useState(eventList);
  const [newEvents, setNewEvents] = useState([
    { title: "Pancakes Breakfast", type: "Meal", id: "0" },
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
      
    let custom = arrKey[result.source.droppableId][0][result.source.index].editable && result.source.droppableId == "timetable" && !sameArray || false
    
    if(arrKey[result.source.droppableId][0][result.source.index].title.trim() == "" || arrKey[result.source.droppableId][0][result.source.index].type.trim() == "") return

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
        setEvents(custom && output.fromArr.filter(event => event.editable && event.title == "" && event.type == "").length == 0 ? [...output.fromArr, {
            title: "",
            type: "",
            id: new Date().toISOString(),
            editable: true
          }] : output.fromArr );
      }
    }

    // if (result.source.droppableId !== result.destination.droppableId) {
    //   arrKey[result.source.droppableId][1]([...fromArr]);
    // }
  };

  return (
    <div className={styles.wrapper}>
      <Zoom>
      <h1><span style={{background: '#07151b', padding: '9px 6px 2px 6px', borderRadius: '10px', color: '#dedaca'}}>you</span> decide your own adventure...</h1>
      </Zoom>
      <Fade delay={300}>
      <p>
        We’ll sleep in tents, code deep into the night, barbecue by the beach,
        toast marshmallows around a campfire — most importantly, however, you'll
        be given the time, space, and freedom to go on an adventure of your
        choosing.
      </p>
      </Fade>
      <Fade delay={500}>
      <div>
        <DragDropContext onDragEnd={reorderItems}>
          <div
            className={styles.timetable}
          >
            <Droppable droppableId="timetable">
              {(provided) => (
                <>
                  <div
                    style={{ scidth: "400px", marginRight: "3vw" }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={styles.timetableItem}
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
                                    {event.editable ?
                                      <>
                                        <p className={styles.eventtype} value={event.type} style={{background: 'none', padding: 0, border: 'none'}}>Your own activity...</p>
                                        <input onChange={(e) => {
                                          let tempEvents = events
                                          tempEvents = tempEvents.map(mappedEvent => {
                                            if(mappedEvent.id != event.id){
                                              return mappedEvent
                                            }
                                            else {
                                              return {...mappedEvent, title: e.target.value, type: "Your own activity..."}
                                            }
                                          })
                                          setEvents(tempEvents)
                                        }} className={styles.maininput} value={event.title} placeholder="Activity" style={{background: 'none', padding: 0, border: 'none'}}/>
                                      </>
                                      :
                                      <>
                                        <p className={styles.eventtype}>
                                          {event.type} 
                                        </p>
                                        <h4>{event.title}</h4>
                                      </>
                                    }
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
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    {[
                      9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                    ].map((num, i) => {
                      return (
                        <p
                          key={`hour-${num}`}
                          style={{
                            marginTop: "0",
                            fontStyle: "italic",
                            fontSize: "1em",
                          }}
                        >
                          {num > 12
                            ? `${num - 12}pm`
                            : num == 12
                            ? `12pm`
                            : `${num}am`}
                        </p>
                      );
                    })}
                    {/* <p style={{paddingBottom: '150%'}}>9am</p>
                    <p style={{paddingBottom: '150%'}}>2pm</p>
                    <p style={{paddingBottom: '150%'}}>7pm</p> */}
                  </div>
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      // height: "100%",
                      width: "100%",
                      border: "1px solid black",
                      background: "transparent",
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
      </Fade>
    </div>
  );
};
