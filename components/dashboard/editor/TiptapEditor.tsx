"use client";

import { useState, useCallback, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import FloatingMenu from "@tiptap/extension-floating-menu";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import CodeBlock from "@tiptap/extension-code-block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Bold,
  Italic,
  Link as LinkIcon,
  Image as ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Code2,
  Undo,
  Redo,
  Type,
} from "lucide-react";

const extensions = [
  StarterKit.configure({
    heading: false,
    codeBlock: false, // Disable default codeBlock to use our configured one
  }),
  Heading.configure({
    levels: [1, 2, 3, 4, 5],
  }),
  CodeBlock.configure({
    HTMLAttributes: {
      class:
        "bg-slate-900 border border-slate-700 rounded-lg p-4 my-4 overflow-x-auto",
    },
  }),
  Image.configure({
    allowBase64: false,
    HTMLAttributes: {
      class: "rounded-lg max-w-full h-auto",
    },
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "text-blue-500 underline hover:text-blue-600 transition-colors",
    },
  }),
  FloatingMenu,
  BubbleMenu,
];

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

export function TiptapEditor({
  content,
  onChange,
  placeholder = "Start writing your blog post...",
  className = "",
}: TiptapEditorProps) {
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const editor = useEditor({
    extensions,
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `prose prose-md prose-invert max-w-none focus:outline-none min-h-[400px] p-4 bg-slate-800 text-white ${className}`,
        placeholder: placeholder,
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const handleImageSubmit = useCallback(() => {
    if (editor && imageUrl) {
      editor
        .chain()
        .focus()
        .setImage({
          src: imageUrl,
          alt: "",
        })
        .run();
    }
    setShowImageDialog(false);
    setImageUrl("");
  }, [editor, imageUrl]);

  const handleLinkSubmit = useCallback(() => {
    if (editor && linkUrl) {
      if (linkText) {
        editor
          .chain()
          .focus()
          .insertContent(`<a href="${linkUrl}">${linkText}</a>`)
          .run();
      } else {
        editor.chain().focus().setLink({ href: linkUrl }).run();
      }
    }
    setShowLinkDialog(false);
    setLinkUrl("");
    setLinkText("");
  }, [editor, linkUrl, linkText]);

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md border border-slate-700">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-slate-700 bg-slate-800">
        {/* Text Formatting */}
        <Button
          type="button"
          variant={editor.isActive("bold") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("italic") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("code") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code className="w-4 h-4" />
        </Button>

        <div className="mx-1 w-px h-6 bg-slate-600" />

        {/* Headings */}
        <Button
          type="button"
          variant={editor.isActive("paragraph") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <Type className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={
            editor.isActive("heading", { level: 1 }) ? "default" : "outline"
          }
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={
            editor.isActive("heading", { level: 2 }) ? "default" : "outline"
          }
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={
            editor.isActive("heading", { level: 3 }) ? "default" : "outline"
          }
          size="sm"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 className="w-4 h-4" />
        </Button>

        <div className="mx-1 w-px h-6 bg-slate-600" />
 
        {/* Lists */}
        <Button
          type="button"
          variant={editor.isActive("bulletList") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("orderedList") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("blockquote") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("codeBlock") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code2 className="w-4 h-4" />
        </Button>

        <div className="mx-1 w-px h-6 bg-slate-600" />

        {/* Media & Links */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setShowImageDialog(true)}
        >
          <ImageIcon className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={editor.isActive("link") ? "default" : "outline"}
          size="sm"
          onClick={() => setShowLinkDialog(true)}
        >
          <LinkIcon className="w-4 h-4" />
        </Button>

        <div className="mx-1 w-px h-6 bg-slate-600" />

        {/* Undo/Redo */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="w-4 h-4" />
        </Button>
      </div>

      {/* Editor Content */}
      <div className="relative">
        <EditorContent editor={editor} />
      </div>

      {/* Link Dialog */}
      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Link</DialogTitle>
            <DialogClose onClick={() => setShowLinkDialog(false)} />
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="linkUrl">URL</Label>
              <Input
                id="linkUrl"
                type="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="linkText">Link Text (optional)</Label>
              <Input
                id="linkText"
                placeholder="Link text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowLinkDialog(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleLinkSubmit}>
                Add Link
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Image</DialogTitle>
            <DialogClose onClick={() => setShowImageDialog(false)} />
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowImageDialog(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleImageSubmit}>
                Add Image
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
