import os
import re
import unittest

class TestIndexHtml(unittest.TestCase):
    def test_index_exists_and_has_app(self):
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'index.html')
        self.assertTrue(os.path.exists(path), 'index.html should exist')
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        self.assertRegex(content, r'<div[^>]*id="app"', 'index.html should contain the app div')

if __name__ == '__main__':
    unittest.main()
