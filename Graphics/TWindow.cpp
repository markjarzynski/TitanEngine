#include "TWindow.h"

namespace Titan
{

TWindow::TWindow (int Width, int Height, std::string Name)
    : width(Width), height(Height), name(Name)
{
    glfwInit();

    glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);

    window = glfwCreateWindow(width, height, name.c_str(), nullptr, nullptr);
    glfwSetWindowUserPointer(window, this);
    glfwSetFramebufferSizeCallback(window, framebufferResizeCallback);
}

TWindow::~TWindow ()
{
    glfwDestroyWindow(window);
    glfwTerminate();
}

static void framebufferResizeCallback(GLFWwindow* window, int width, int height)
{
    TWindow* Window = reinterpret_cast<TWindow*>(glfwGetWindowUserPointer(window));
    Window->framebufferResized = true;
}

} // namespace Titan