import { render, screen } from "@testing-library/vue";
import { createMemoryHistory, createRouter } from "vue-router";
import HomePage from "../../src/ui/pages/HomePage.vue";

describe("HomePage tests", () => {
  it("should render the home page content", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: "/", component: HomePage },
        { path: "/products", component: { template: "<div />" } },
      ],
    });

    await router.push("/");
    await router.isReady();

    render(HomePage, {
      global: {
        plugins: [router],
      },
    });

    expect(
      screen.getByRole("heading", { name: "Home Page" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Info text")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Go to products page" }),
    ).toBeInTheDocument();
  });
});
