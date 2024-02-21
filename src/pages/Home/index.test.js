import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(async () => {
      await screen.findByText("Message envoyé !");
      }, 1001)
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  })
  it("a list a people is displayed",  () => {
    // to implement
    render(<Home />)
     screen.findByText('CEO')
     screen.findByText('Directeur Marketing')
  })
  it("a footer is displayed", () => {
    // to implement    
    render(<Home />)
    screen.findByText('Contactez-nous')
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Home />)
    screen.findByText('boom')


  })
});
