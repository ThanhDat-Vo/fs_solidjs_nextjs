import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";
import fs from "fs";

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
