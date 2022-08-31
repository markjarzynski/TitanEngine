#include "TConfig.h"
#include "TApp.h"

#include <cstdlib>
#include <iostream>
#include <stdexcept>

#include <glm/glm.hpp>


int main (int argc, char** argv)
{
    std::cout << TITAN_PROJECT_NAME << " " << TITAN_VERSION << std::endl;

    glm::vec3 a = glm::vec3(1.f, 2.f, 3.f);
    glm::vec3 b = a * 2.f - 1.f;
    std::cout << "[" << b.x << "," << b.y << "," << b.z << "]" << std::endl;

    Titan::TApp app;

    try
    {
        app.run();
    }
    catch (const std::exception& e)
    {
        std::cerr << e.what() << std::endl;
        return 1;
    }

    return 0;
}