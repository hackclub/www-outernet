import styles from "./YourAdventure.module.scss";

function insertAndShift(arr, from, to) {
  let cutOut = arr.splice(from, 1)[0]; // cut the element at index 'from'
  arr.splice(to, 0, cutOut); // insert it at index 'to'
}

export const YourAdventure = () => {
  const [events, setEvents] = useState(["", ""]);

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
    </div>
  );
};
