import os
import unittest

class TestREADME(unittest.TestCase):
    def test_readme_exists_and_not_empty(self):
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'README.md')
        self.assertTrue(os.path.exists(path), 'README.md should exist')
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read().strip()
        self.assertTrue(len(content) > 0, 'README.md should not be empty')

if __name__ == '__main__':
    unittest.main()
