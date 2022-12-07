import { render, screen } from "@testing-library/react";
import {NewsComponent} from "../components/NewsComponent";



describe("NewsComponent", () => {
    it("should render Register component correctly", () => {
        render(<NewsComponent />);
        const message = screen.getByText("Empeza buscando una noticia");
        expect(message).toBeInTheDocument();
      });

})