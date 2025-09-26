router.post('/send-message', async (req, res) => {
  const { username, message, img, token } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'ok just wait' });
  }

  try {


     const newMessage = {
      id: result.insertId,
      sender: username,
      sender_image: img,
      message,
      created_at: new Date().toISOString(),
    };

    for (const [user, socket] of connectedClients.entries()) {
      if (user !== username) {
        socket.emit("new-message", newMessage);
      }
    }
    const query = "INSERT INTO messages (sender, sender_image, message) VALUES (?, ?, ?)";
    await pool.query(query, [username, img, message]);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});
