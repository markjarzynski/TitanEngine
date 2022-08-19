#include "NewEngineWindow.h"

namespace NE
{

NewEngineWindow::NewEngineWindow (int Width, int Height, std::string Name)
    : width(Width), height(Height), name(Name)
{
    glfwInit();

    glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);

    window =  glfwCreateWindow(width, height, name.c_str(), nullptr, nullptr);
}

NewEngineWindow::~NewEngineWindow ()
{
    glfwDestroyWindow(window);
    glfwTerminate();
}

}