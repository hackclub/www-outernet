import styles from "./YourAdventure.module.scss";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function insertAndShift(arr, from, to) {
  let cutOut = arr.splice(from, 1)[0]; // cut the element at index 'from'
  arr.splice(to, 0, cutOut); // insert it at index 'to'
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
  const [newEvents, setNewEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const reorderItems = (result) => {
    if (!result.destination) return;

    let eventsCopy = [...events];

    insertAndShift(eventsCopy, result.source.index, result.destination.index);

    setEvents(eventsCopy);
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
          <Droppable droppableId="timetable">
            {(provided) => (
              <>
                <ul {...provided.droppableProps} ref={provided.innerRef}>
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
                                >
                                  {event.title}
                                  {event.id}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })
                    : ""}
                </ul>
                {provided.placeholder}
              </>
            )}
          </Droppable>

          <Droppable droppableId="timetable2">
            {(provided) => (
              <>
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {newEvents && loaded
                    ? newEvents.map((event, i) => {
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
                                >
                                  {event.title}
                                  {event.id}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })
                    : ""}
                </ul>
                {provided.placeholder}
              </>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};
