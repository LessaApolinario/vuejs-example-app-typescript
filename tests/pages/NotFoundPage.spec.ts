import { render, screen } from "@testing-library/vue";
import { createMemoryHistory, createRouter } from "vue-router";
import HomePage from "../../src/ui/pages/HomePage.vue";
import NotFoundPage from "../../src/ui/pages/NotFoundPage.vue";

describe("NotFoundPage tests", () => {
  it("should render the Not Found page content", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: "/", component: HomePage },
        { path: "/:pathMatch(.*)*", component: NotFoundPage },
      ],
    });

    await router.push("/missing-page");
    await router.isReady();

    render(NotFoundPage, {
      global: {
        plugins: [router],
      },
    });

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, this page was not found"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Go to home page" }),
    ).toBeInTheDocument();
  });
});
