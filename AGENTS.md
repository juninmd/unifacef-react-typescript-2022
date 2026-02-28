```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure high-quality, maintainable, and robust AI coding agent development within the AGENTS repository. Adherence to these principles is mandatory for all development activities.

## 1. DRY (Don't Repeat Yourself)

*   All code must be reusable. Solutions to common problems should be encapsulated in separate functions or modules.
*   Avoid duplicating logic and data structures across multiple files.
*   Favor composition over inheritance when appropriate.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for the simplest solution that meets the required functionality.
*   Minimize complexity in design and implementation.
*   Avoid unnecessary abstraction or layers.
*   Prioritize readability and understandability.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have a single, well-defined responsibility.
*   **Open/Closed Principle:** The system should be extensible without modification. New features can be added without altering existing code.
*   **Liskov Substitution Principle:** Subclasses must be substitutable for their base classes without affecting the correctness of the program.
*   **Interface Segregation Principle:** Client code should not be required to compute over dependencies on objects other than those that are necessary.
*   **Dependency Inversion Principle:** High-level modules should be replaced by their dependencies.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required and explicitly defined.
*   Avoid adding features or code that isn't necessary for the current task.
*   Refactor only when the original requirements are no longer valid.

## 5. Code Formatting & Style

*   Use consistent indentation and spacing.  Use a code formatter (e.g., Black, Prettier) to enforce consistency.
*   Follow the established coding style guide ([Link to Style Guide]) for all code.
*   Use meaningful variable and function names.
*   Add comments to explain complex logic or non-obvious decisions.

## 6. File Size & Length

*   Each file must have a maximum of 180 lines of code.
*   Code should be logically structured and easy to follow.

## 7. Test Coverage

*   Achieve a minimum test coverage of 80%.
*   All new features and modifications must be thoroughly tested through automated tests.
*   Unit tests should cover all critical logic.
*   Integration tests should validate interactions between different components.

## 8. Data Management

*   Use a standardized data structure for representing entities and states.
*   Ensure data validation and integrity.
*   Implement proper error handling and logging.

## 9. Dependency Management

*   All dependencies must be explicitly declared and managed within the repository.
*   Dependency versions should be tracked and updated as needed.
*   Use a dependency management tool (e.g., Poetry, Pipenv) to facilitate dependency management.

## 10.  AGENTS.md Structure

*   Each file will have a clear, descriptive name (e.g., `agent_state_management.py`).
*   Include a brief description of the file's purpose in a comment.
*   Include relevant comments within the code, explaining key decisions.
*   Use a consistent structure for function signatures and return values.

## 11.  Testing Focus

*   All tests must be written using the provided test frameworks ([Framework Name]).
*   Tests should cover all critical functionalities and edge cases.
*   Focus on automated testing to ensure code quality.

## 12.  Version Control

*   Use Git for version control.
*   Tag commits appropriately.
*   Commit frequently with meaningful messages.

## 13.  Documentation

*   Provide clear and concise documentation for all functions, classes, and modules.
*   Utilize docstrings to document API usage.
*   Keep documentation up-to-date with code changes.

## 14.  Code Review Process

*   All code must undergo mandatory code review.
*   Reviewers should focus on adherence to SOLID principles and DRY principles.
*   Reviewers should verify test coverage.

## 15.  Progress Tracking

*   Use a task management system (e.g., Jira, Asana) to track progress on tasks.
*   Establish a regular schedule for reviewing and updating code.

These guidelines are intended as a framework for development.  They are subject to change as the AGENTS repository evolves.  Any modifications must be reviewed and approved by the team lead.
```