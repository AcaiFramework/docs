import { createContext } from "preact";

const localizationContext = createContext((category?: string) => Promise.resolve({ [category]: "" }));
export default localizationContext;
