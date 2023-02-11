import { UserProvider } from "./UserContext";
import { NoteProvider } from "./TaskContext";

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <NoteProvider>{children}</NoteProvider>
    </UserProvider>
  );
};

export default ContextProvider;
